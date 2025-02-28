// ページ名を受け取り、ブラウザに表示するページタイトルを設定する
import { useEffect } from 'react';


function PageName(title) {
    useEffect(() => {
        document.title = `${title} | thinleaf.net`;
    }, [title]);
}

export default PageName;
