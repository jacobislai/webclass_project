const currentTime = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    if (hh < 10) {
        hh = '0' + hh;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (ss < 10) {
        ss = '0' + ss;
    }

    console.log(hh, mm, ss)
    // reutrn [hh:mm:ss]

    /**
     * hh = 12
     * mm = 08
     * ss = 35
     * 
     * return [1, 2, ':', 0, 8, ':', 3, 5]
     */
}

setInterval(() => {
    let times = currentTime();
    //times update to html.
}, 1000)