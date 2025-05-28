<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Payment Confirmation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f8;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      background-color: #ffffff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .success-icon {
      font-size: 48px;
      color: #4CAF50;
    }

    .title {
      font-size: 28px;
      font-weight: bold;
      margin-top: 10px;
      color: #333;
    }

    .code-box {
      margin-top: 30px;
      padding: 20px;
      font-size: 22px;
      background-color: #e9f5ec;
      color: #2e7d32;
      border-radius: 10px;
      display: inline-block;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="success-icon">✅</div>
    <div class="title">Payment Successful</div>
    <div class="code-box" id="codeBox">Your code is:  </div>
  </div>

  <!-- كود JavaScript بعد كل عناصر الصفحة -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      // قائمة الأرقام المحفوظة
      const codes = [1234, 5678, 9012, 3456, 7890, 2468, 1357, 8080, 4321, 6789];
      // اختيار عشوائي من القائمة
      const randomCode = codes[Math.floor(Math.random() * codes.length)];
      // عرض الكود داخل العنصر
      const box = document.getElementById('codeBox');
      box.textContent = `Your code is: ${randomCode}`;
      ;
    });
  </script>

</body>
</html>
// <?php
//     $servername  = 'localhost';
//     $username = 'root';
//     $password = '';
//     $dbname = 'parking';

//     //connection
//     $conn = new mysqli($servername, $username, $password, $dbname);
//     if ($conn->connect_error) {
//         die("Connection failed: " . $conn->connect_error);
//     }

//     if (isset($_POST['confirm'])) {
//         $card_num = $_POST["card_num"];
//         $card_name = $_POST["card_name"];

//         // Generate code      

//        $code = rand(342124, 342144);

//         // insert payment data
//         $stmt = $conn->prepare("INSERT INTO booking (card_num, card_name, code) VALUES (?, ?, ?)");
//         $stmt->bind_param("ssi", $card_num, $card_name, $code); 
//         if ($stmt->execute()) {
//             echo "<h2>✅ Payment Done Successfully<h2>";
//             echo "<p>Your Code: <strong style='font-size:24px;'>$code</strong></p>";
//         } else {
//             echo "<script>alert('There was an error while inserting the data.');</script>";
//         }

//         // close connection
//         $stmt->close();
//         $conn->close();
//     }
// ?>
