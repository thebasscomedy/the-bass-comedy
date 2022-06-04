<!DOCTYPE html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
  <script type="text/javascript">
    function refresh() {
      var req = new XMLHttpRequest();
      console.log("Grabbing Value");
      req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
          document.getElementById('guwiiFavouriteNumber').innerText = req.responseText;
        }
      }
      req.open("GET", 'reload.txt', true);
      req.send(null);
    }

    function init() {
      refresh()
      var int = self.setInterval(function () {
        refresh()
      }, 1000);
    }
  </script>
</head>

<body onload="init()">
  <div id="main">
    <div id="updateMe">
      <h2>guwii's Favourite Number is:</h2>
      <h1 id="guwiiFavouriteNumber"></h1>
    </div>
  </div>
</body>
</html>
