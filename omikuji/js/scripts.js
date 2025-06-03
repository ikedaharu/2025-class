document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = [
        '大吉','吉', '中吉', '小吉', '末吉', '凶','大凶'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)];
    
    const resultElement = document.getElementById('result');
    
    document.getElementById('result').textContent = `あなたの運勢は... ${result}!`;

    // 文字色を変更
  switch (result) {
    case '大吉':
      resultElement.style.color = 'red';
      break;
    case '吉':
      resultElement.style.color = 'orange';
      break;
    case '中吉':
      resultElement.style.color = 'gold';
      break;
    case '小吉':
      resultElement.style.color = 'green';
      break;
    case '末吉':
      resultElement.style.color = 'blue';
      break;
    case '凶':
      resultElement.style.color = 'purple';
      break;
    case '大凶':
      resultElement.style.color = 'black';
      break;
    default:
      resultElement.style.color = 'black'; // デフォルトは黒として設定した
  }
});