function explain(mes){
    if(mes == 0){
    alert('5個のボタンのどれか一つは起爆スイッチになっています.起爆スイッチを押すとGAMEOVERとなります。')
    }
}
function sting(judge){
    let message = '';
    
    let rand = Math.floor(Math.random()*5) + 1;
    console.log(rand);
    if(judge == rand){
        alert('BANG!!');
        message = 'GAMEOVER';
    }else{
            message = 'SAFE';
        }

    const id =document.querySelector('#result');
    id.textContent = message;
}

function predict(num){
    let luck = '';
    if(num == 1){
        let rand = Math.floor(Math.random()*100) + 1;
        if(rand > 95){
            luck = '大吉';
        }else if(rand == 77){
            luck = 'LUCKIEST!!';
        }else if(rand <= 95 && rand > 86){
            luck = '中吉';
        }else if(rand <= 86 && rand > 74){
            luck = '小吉';
        }else if(rand <= 74 && rand > 33){
            luck = '吉';
        }else if(rand <= 33 && rand > 5){
            luck = '末吉';
        }else if(rand <= 5 && rand >= 1){
            luck = '凶';
        }
    }
    const id =document.querySelector('#luck');
    id.textContent = luck + '!!';
}

function hyouji(num){

}