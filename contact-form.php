<?php
#h65 113/1/17 版
#下3段式抓 為案件編號 $case_code
#$case_code_test 是用來判斷是否為1的測試頁
#$case_code = "jw";特殊案使用
$src =$_SERVER['SERVER_NAME']; 
$case_code_test = substr(substr($src,0,strpos($src,'.')),-1);
$case_code = "newera";

# PDO DB 連線 Start
    $pdo=new pdo('mysql:host=localhost;dbname=htw12_web','htw12','3hdaiU813Q');
    $pdo->exec("SET NAMES 'utf8'");
# PDO DB 連線 End

# 下3段 抓$case_name 這樣就不會打錯案名了
# $case_name = "鳳翔"; 特殊案使用
$sql_name = "SELECT casename FROM susers WHERE email = '" . $case_code . "'";
$dataList = $pdo->query($sql_name)->fetchAll();
$case_name = $dataList[0]['casename'];

$name         = isset($_POST['name']) ? $_POST['name'] : '';
$phone        = isset($_POST['phone']) ? $_POST['phone'] : '';
$user_email   = isset($_POST['email']) ? $_POST['email'] : '';
$city         = isset($_POST['city']) ? $_POST['city'] : '';
$area         = isset($_POST['area']) ? $_POST['area'] : '';
$msg          = isset($_POST['msg']) ? $_POST['msg'] : '';
$utm_source   = isset($_POST['utm_source']) ? $_POST['utm_source'] : '';
$utm_medium   = isset($_POST['utm_medium']) ? $_POST['utm_medium'] : '';
$utm_content  = isset($_POST['utm_content']) ? $_POST['utm_content'] : '';
$utm_campaign = isset($_POST['utm_campaign']) ? $_POST['utm_campaign'] : '';
$datetime     = date ("Y-m-d H:i:s" , mktime(date('H'), date('i'), date('s'), date('m'), date('d'), date('Y'))) ;
$room_type    = isset($_POST['room_type']) ? $_POST['room_type'] : '';
$budget       = isset($_POST['budget']) ? $_POST['budget'] : '';
    
# 好站 hj 客製資料：可聯絡時間
$time_start        = isset($_POST['time_start']) ? $_POST['time_start'] : '';
$time_end        = isset($_POST['time_end']) ? $_POST['time_end'] : '';

    # 不同版本前端相容 Start
    if ($name == '') {
        $name = isset($_POST['widget-contact-form-name']) ? $_POST['widget-contact-form-name'] : '';
    }
    if ($phone == '') {
        $phone = isset($_POST['widget-contact-form-phone']) ? $_POST['widget-contact-form-phone'] : '';
    }
    if ($user_email == '') {
        $user_email = isset($_POST['widget-contact-form-email']) ? $_POST['widget-contact-form-email'] : '';
    }
    if ($city == '') {
        $city = isset($_POST['widget-contact-form-city']) ? $_POST['widget-contact-form-city'] : '';
    }
    if ($area == '') {
        $area = isset($_POST['widget-contact-form-area']) ? $_POST['widget-contact-form-area'] : '';
    }
    if ($msg == '') {
        $msg = isset($_POST['widget-contact-form-msg']) ? $_POST['widget-contact-form-msg'] : '';
    }
    if ($utm_source == '') {
        $utm_source = isset($_POST['widget-contact-form-utm_source']) ? $_POST['widget-contact-form-utm_source'] : '';
    }
    if ($utm_source == '') {
        $utm_source = isset($_POST['widget-contact-form-utm_source']) ? $_POST['widget-contact-form-utm_source'] : '';
    }
    if ($utm_medium == '') {
        $utm_medium = isset($_POST['widget-contact-form-utm_medium']) ? $_POST['widget-contact-form-utm_medium'] : '';
    }
    if ($utm_content == '') {
        $utm_content = isset($_POST['widget-contact-form-utm_content']) ? $_POST['widget-contact-form-utm_content'] : '';
    }
    if ($utm_campaign == '') {
        $utm_campaign = isset($_POST['widget-contact-form-utm_campaign']) ? $_POST['widget-contact-form-utm_campaign'] : '';
    }

    $datetime = date ("Y-m-d H:i:s" , mktime(date('H'), date('i'), date('s'), date('m'), date('d'), date('Y'))) ;
    # 不同版本前端相容 End

    $bCheck = true; //信件檢查
    
    if (empty($name) || empty($phone)) {
        // 名字或電話為空
        $bCheck = false;
        echo "名字或電話為空，檢查不通過";
    }
    /*
    if (empty($name) && empty($phone) && empty($user_email) && empty($city) && empty($area) && 
    empty($msg) && empty($utm_source) && empty($utm_medium) && empty($utm_content) && empty($utm_campaign)) {
        // 所有欄位都為空
        $bCheck = false;
        echo "所有欄位都為空，檢查不通過";
    }
    */


    # 取得 IP Start
    if (!empty($_SERVER["HTTP_CLIENT_IP"])){
        $sIp = $_SERVER["HTTP_CLIENT_IP"];
    } else if (!empty($_SERVER["HTTP_X_FORWARDED_FOR"])){
        $sIp = $_SERVER["HTTP_X_FORWARDED_FOR"];
    } else {
        $sIp = $_SERVER["REMOTE_ADDR"];
    }
    # 取得 IP End

    # 檢查是否時間範圍內重複留言 Start
    $sCheckMsg = ''; //檢查留言內容

    if ($msg == '') {
        $msg = '無留言';
    }

    if ((isset($_COOKIE['msg'])) && ($_COOKIE['msg'] != null)) {
        $sCheckMsg = $_COOKIE['msg'];
    }
    setcookie ("msg", $msg, time()+36400);


    if (($sCheckMsg === $msg)) { //要三個等號, 不然 null 會等於 empty
        $bCheck = false;
    }
    # 檢查是否時間範圍內重複留言 End

    # 檢查所有關鍵字 Start
    $sql = "SELECT * FROM `block_message`";
    $aGetDbList = $pdo->query($sql)->fetchAll();

    $aFilterKeyWordList = array(); //留言關鍵字檢查初始化
    $aFilterNameList = array(); //檢查姓名初始化
    $aFilterEmailList = array();
    $aFilterPhoneList = array();
    $aFilterIpList = array();

    foreach ($aGetDbList as $sKey => $aGetDb) {

        switch ($aGetDb['type']) { //switch Start
            case '1': //留言內容
                $aFilterKeyWordList[] = $aGetDb['content'];
                break;
            case '2': //用戶名稱
                $aFilterNameList[] = $aGetDb['content'];
                break;
            case '3': //信箱
                $aFilterEmailList[] = $aGetDb['content'];
                break;
            case '4':
                $aFilterPhoneList[] = $aGetDb['content'];
                break;
            case '5':
                $aFilterIpList[] = $aGetDb['content'];
                break;
            default:
                # code...
                break;
        } //swutch End

    }
    # 檢查所有關鍵字 End

    # 檢查留言關鍵字 Start
    // $aFilterKeyWordList = array('game', 'casino', '測試', 'test');
    $checkConunt = 0;
    foreach ($aFilterKeyWordList as $key => $sFilterKeyWord) {
        $checkConunt = explode($sFilterKeyWord, $msg);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查留言關鍵字 End

    # 檢查姓名 Start
    // $aFilterNameList = array('蔡銘聰');
    $checkConunt = 0;
    foreach ($aFilterNameList as $key => $sFilterName) {
        $checkConunt = explode($sFilterName, $name);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查姓名 End

    # 檢查信箱 Start
    $checkConunt = 0;
    foreach ($aFilterEmailList as $key => $aFilterValue) {
        $checkConunt = explode($aFilterValue, $user_email);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查信箱 End

    # 檢查電話 Start
    $checkConunt = 0;
    foreach ($aFilterPhoneList as $key => $aFilterValue) {
        $checkConunt = explode($aFilterValue, $phone);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查電話 End

    # 檢查IP Start
    $checkConunt = 0;
    foreach ($aFilterIpList as $key => $aFilterValue) {
        $checkConunt = explode($aFilterValue, $sIp);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查IP End

    # 取得信箱帳號密碼, Insert google API token Start
    $sql = "SELECT * FROM `mail_token` limit 0,1";
    $aGetMailTokenDbList = $pdo->query($sql)->fetchAll();
    $token    = $aGetMailTokenDbList[0]['token'];
    $mailName = $aGetMailTokenDbList[0]['mail'];
    $mailPwd  = $aGetMailTokenDbList[0]['pwd'];
    # 取得信箱帳號密碼, Insert google API token End

    # 老版本讀取 Start
    $db_host = 'localhost';
    $db_user = 'htw12';
    $db_pass = '3hdaiU813Q';
    $db_name = 'htw12_web';

    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
    // mysqli_query("SET NAMES UTF8");
    // mysqli_select_db($db_name, $con);

    $query = "SELECT tomail FROM susers WHERE email = '".$case_code."'";
    $result = mysqli_query($con, $query);
    $row = mysqli_fetch_row($result);

    if (mysqli_num_rows($result))
    {
        $tomail = $row[0];
    }

    $query_admin = "SELECT admin_email FROM admin WHERE email = 'admin'";
    $result_admin = mysqli_query($con, $query_admin);
    $row_admin = mysqli_fetch_row($result_admin);

    if (mysqli_num_rows($result_admin))
    {
        $tomail_admin = $row_admin[0];
    }
    # 老版本讀取 End

    ini_set("display_errors", "On");
    date_default_timezone_set("Asia/Taipei");
    
    require_once('php-mailer/PHPMailerAutoload.php'); //引入phpMailer 記得將路徑換成您自己的path

    $mail= new PHPMailer(); //建立新物件
    $mail->IsSMTP(); //設定使用SMTP方式寄信
    $mail->SMTPAuth = true; //設定SMTP需要驗證
    $mail->Host = "cp31.g-dns.com"; //設定SMTP主機
    $mail->Port = 25; //設定SMTP埠位，預設為25埠。
    $mail->CharSet = "utf-8"; //設定郵件編碼

    $mail->Username = $mailName; //設定驗證帳號
    $mail->Password = $mailPwd; //設定驗證密碼

    $mail->From = "noreply@h65.tw"; //設定寄件者信箱
    $mail->FromName = $case_name." - 官網網站"; //設定寄件者姓名

    $mail->Subject = $case_name." - 官網網站"; //設定郵件標題
    $mail->Body = "網站：https://" . $src . "/<BR>姓名：" . $name . "<BR>電話：" . $phone . "<BR>城市：" . $city . $area . "<BR>需求房型：".$room_type."<BR>購屋預算：".$budget."<BR>留言：".$msg."<BR>備註："."<BR><BR>填表日期：".$datetime."<BR>廣告來源：".$utm_source."<BR>廣告媒介：".$utm_medium."<BR>廣告名稱：".$utm_campaign."<BR>廣告內容：".$utm_content; //設定郵件內容
    $mail->IsHTML(true); //設定郵件內容為HTML

    $tomail_arr = explode(",",$tomail);

    $mail->IsHTML(true); //設定郵件內容為HTML

    $tomail_arr = explode(",",$tomail);
    $tomail_admin_arr = explode(",",$tomail_admin);

    //檢查沒問題才寄出信件
    if ($bCheck == true) { //if start

      # 添加到 Googlde 資料DB Start
        try {
            $url = "http://104.155.235.216/send.php";
            $url .= "?token=".$token;
            $url .= "&name=".$name;
            $url .= "&phone=".$phone;
            $url .= "&email=".$user_email;
            $url .= "&city=".$city;
            $url .= "&area=".$area;
            $url .= "&room_type=" . $room_type;
            $url .= "&budget=" . $budget;
            $url .= "&message=".$msg;
            $url .= "&utm_source=".$utm_source;
            $url .= "&utm_medium=".$utm_medium;
            $url .= "&utm_content=".$utm_content;
            $url .= "&utm_campaign=".$utm_campaign;
            $url .= "&case_code=".$case_code;
            $url .= "&reservation_datetime=".$datetime;

            // $ch = curl_init();
            // curl_setopt($ch,CURLOPT_URL,$url);
            // curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
            // curl_setopt($ch,CURLOPT_TIMEOUT,1);
            // $result = curl_exec($ch);
            // curl_close($ch);
            
            // 使用 file_get_contents 發送 GET 請求
            $response = file_get_contents($url);

            // 檢查回應是否為 FALSE，這可能表示請求失敗
            if ($response === FALSE) {
                // 處理錯誤
                die('Error occurred');
            }

            // 輸出回應
            echo $response;

            // echo "send ok";

        } catch (Exception $e) {

            // echo "send fail";
        }
        # 添加到 Googlde 資料DB End

        foreach($tomail_arr as $email) {
           $mail->AddAddress("$email");
        }

        foreach($tomail_admin_arr as $email_admin) {
           $mail->AddBCC("$email_admin");
        }

        if (!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
        } else {
            //echo "Message sent!";
        }
    } //if end

?>
<!DOCTYPE html>
<html lang="zh-tw">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">

</head>
<body>
<script src="js/jquery.js"></script>

<script type="text/javascript">
document.location.replace('formThanks');
</script>
</body>
</html>
<?php
    # PDO DB 連線 Start
    $pdo=new pdo('mysql:host=localhost;dbname=htw12_web','htw12','3hdaiU813Q');
    $pdo->exec("SET NAMES 'utf8'");
    # PDO DB 連線 End

    $bCheck = true; //信件檢查

    # 取得 IP Start
    if (!empty($_SERVER["HTTP_CLIENT_IP"])){
        $sIp = $_SERVER["HTTP_CLIENT_IP"];
    } else if (!empty($_SERVER["HTTP_X_FORWARDED_FOR"])){
        $sIp = $_SERVER["HTTP_X_FORWARDED_FOR"];
    } else {
        $sIp = $_SERVER["REMOTE_ADDR"];
    }
    # 取得 IP End

    # 檢查是否時間範圍內重複留言 Start
    $sCheckMsg = ''; //檢查留言內容

    if ($_POST['msg'] == '') {
        $_POST['msg'] = '無留言';
    }

    if (($_COOKIE['msg'] != null) && ($_POST['msg'] != null)) {
        $sCheckMsg = $_COOKIE['msg'];
        setcookie ("msg", $_POST['msg'], time()+36400);
    } else {
        setcookie ("msg", $_POST['msg'], time()+36400);
    }


    if (($sCheckMsg === $_POST['msg'])) { //要三個等號, 不然 null 會等於 empty
        $bCheck = false;
    }
    # 檢查是否時間範圍內重複留言 End

    # 檢查所有關鍵字 Start
    $sql = "SELECT * FROM `block_message`";
    $aGetDbList = $pdo->query($sql)->fetchAll();

    $aFilterKeyWordList = array(); //留言關鍵字檢查初始化
    $aFilterNameList = array(); //檢查姓名初始化
    $aFilterEmailList = array();
    $aFilterPhoneList = array();
    $aFilterIpList = array();

    foreach ($aGetDbList as $sKey => $aGetDb) {

        switch ($aGetDb['type']) { //switch Start
            case '1': //留言內容
                $aFilterKeyWordList[] = $aGetDb['content'];
                break;
            case '2': //用戶名稱
                $aFilterNameList[] = $aGetDb['content'];
                break;
            case '3': //信箱
                $aFilterEmailList[] = $aGetDb['content'];
                break;
            case '4':
                $aFilterPhoneList[] = $aGetDb['content'];
                break;
            case '5':
                $aFilterIpList[] = $aGetDb['content'];
                break;
            default:
                # code...
                break;
        } //swutch End

    }
    # 檢查所有關鍵字 End

    # 檢查留言關鍵字 Start
    // $aFilterKeyWordList = array('game', 'casino', '測試', 'test');
    $checkConunt = 0;
    foreach ($aFilterKeyWordList as $key => $sFilterKeyWord) {
        $checkConunt = explode($sFilterKeyWord, $_POST['msg']);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查留言關鍵字 End

    # 檢查姓名 Start
    // $aFilterNameList = array('蔡銘聰');
    $checkConunt = 0;
    foreach ($aFilterNameList as $key => $sFilterName) {
        $checkConunt = explode($sFilterName, $_POST['name']);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查姓名 End

    # 檢查信箱 Start
    $checkConunt = 0;
    foreach ($aFilterEmailList as $key => $aFilterValue) {
        $checkConunt = explode($aFilterValue, $_POST['email']);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查信箱 End

    # 檢查電話 Start
    $checkConunt = 0;
    foreach ($aFilterPhoneList as $key => $aFilterValue) {
        $checkConunt = explode($aFilterValue, $_POST['phone']);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查電話 End

    # 檢查IP Start
    $checkConunt = 0;
    foreach ($aFilterIpList as $key => $aFilterValue) {
        $checkConunt = explode($aFilterValue, $sIp);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查IP End

    $db_host = 'localhost';
    $db_user = 'htw12';
    $db_pass = '3hdaiU813Q';
    $db_name = 'htw12_web';

    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
    // mysqli_query("SET NAMES UTF8");
    // mysqli_select_db($db_name, $con);

    $query = "SELECT tomail FROM susers WHERE email = '".$case_code."'";
    $result = mysqli_query($con, $query);
    $row = mysqli_fetch_row($result);

    if (mysqli_num_rows($result))
    {
        $tomail = $row[0];
    }

    $query_admin = "SELECT admin_email FROM admin WHERE email = 'admin'";
    $result_admin = mysqli_query($con, $query_admin);
    $row_admin = mysqli_fetch_row($result_admin);

    if (mysqli_num_rows($result_admin))
    {
        $tomail_admin = $row_admin[0];
    }
?>
<!DOCTYPE html>
<html lang="zh-tw">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
</head>
<body>
    