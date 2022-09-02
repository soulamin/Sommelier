export function formatReal(x) {
  const nbDec = 100;
  const a = Math.abs(x);
  let e = Math.floor(a);
  let d = Math.floor((a - e) * nbDec);
  if (d === nbDec) {
    d = 0;
    e++;
  }
  const signStr = x < 0 ? "-" : " ";
  let decStr = d.toString();
  let tmp = 10;
  while (tmp < nbDec && d * tmp < nbDec) {
    decStr = `0${decStr}`;
    tmp *= 10;
  }
  const eStr = e.toString();

  const h = eStr.split("");
  const z = eStr.length % 3;
  let y = "";
  let contador = 0;

  for (let ab = 0; ab < h.length; ab++) {
    if (contador === 2 || (ab === z && z !== 0)) {
      y += `.${h[ab]}`;
      contador = 0;
    } else {
      y += h[ab];

      if (ab === 0 && z === 0) {
      } else {
        contador++;
      }
    }
  }

  return `${signStr + y},${decStr}`;
}

export function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  // console.log(query); //"app=article&act=news_content&aid=160990"
  var vars = query.split("&");
  // console.log(vars); //[ 'app=article', 'act=news_content', 'aid=160990' ]
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // console.log(pair); //[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ]
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}
