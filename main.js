function parking() {
    let vehicle = document.getElementById("kendaraan").value;
    let timeDuration = parseInt(document.getElementById("waktu").value);
    let defaultPriceCar = 10000;
    let nextPriceCar = 5000;
    let defaultPricebike = 5000;
    let nextPricebike = 2500;
    console.log(timeDuration)
    if (vehicle === "car") {

        if (timeDuration <= 2) {
            alert(`biaya dari parkir mobil anda adalah ${defaultPriceCar}`);
        } else {
            let additionalTime = timeDuration - 2;
            let additionalprice = nextPriceCar * additionalTime;
            let fixPrice = defaultPriceCar + additionalprice;
            alert(`biaya dari parkir mobil anda adalah ${fixPrice}`);
        }
    } else if (vehicle === "bike") {

        if (timeDuration <= 2) {
            alert(`biaya dari parkir motor anda adalah ${defaultPricebike}`);
        } else {
            let additionalTime = timeDuration - 2;
            let additionalprice = nextPricebike * additionalTime;
            let fixPrice = defaultPricebike + additionalprice;
            alert(`biaya dari parkir motor anda adalah ${fixPrice}`);
        }
    }
}