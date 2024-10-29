document.querySelector(`head`).insertAdjacentHTML('beforeend', `
    <link href="../resources/uds.css" rel="stylesheet"></link>
    <link href="민법-resources/btn-box.css" rel="stylesheet"></link>
    <link href="민법-resources/ul-toggle.css" rel="stylesheet"></link>
    <link href="민법-resources/민법-common.css" rel="stylesheet"></link>
`);


function scriptSplice(a){
    let str = a;
    let matches = str.match(/"([^"]*)"/g);
    let extracted = matches.map(match => match.replace(/"/g, ''));
    return extracted;
}
const scriptArr=scriptSplice(`
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.14.0/jquery-ui.min.js"></script>
    <script src="../resources/udf.js"></script>
    <script src="../resources/udc.js"></script>
    <script src="민법-resources/ul-toggle.js"></script>
    <script src="민법-resources/민법-common.js"></script>
    <script src="민법-resources/정지조건ㆍ해제조건.js"></script>
`);

function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
}

(async function() {
    try {
      for(let s of scriptArr){
        console.log(s);
        await loadScript(s);
      }
      console.log('모든 스크립트 로드 완료');

    } catch (error) {
      console.error('스크립트 로드 중 오류 발생:', error);
    }
  })();



