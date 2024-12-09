const apiUrl = 'https://weather.tsukumijima.net/api/forecast/city/400040';

const weather = document.getElementById('tennki');

// Fetch APIを使用してデータを取得
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTPエラー！ステータスコード: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        weather.innerHTML = ''; // ローディングメッセージを削除
        weather.innerText = data.description.bodyText;
    })
    .catch(error => {
        // エラー
        console.error('データの取得中にエラーが発生しました:', error);
        weather.innerHTML = 'データの取得中にエラーが発生しました。';
    });