import { IoIosArrowBack } from "react-icons/io";
import './offer.css'
import { useEffect } from "react";
import CarouselOffer from "../carousel/CarouselOffer";

const Offer = () => {

    useEffect(() => {
        const d = document.getElementById('days');
        const h = document.getElementById('hours');
        const m = document.getElementById('minutes');
        const s = document.getElementById('seconds');

        function countdown(dateEnd) {
            var timer, days, hours, minutes, seconds;
            dateEnd = new Date(dateEnd);
            dateEnd = dateEnd.getTime();
            if (isNaN(dateEnd)) {
                return;
            }
            timer = setInterval(calculate, 1000);
            function calculate() {
                var dateStart = new Date();
                dateStart = new Date(
                    dateStart.getUTCFullYear(),
                    dateStart.getUTCMonth(),
                    dateStart.getUTCDate(),
                    dateStart.getUTCHours(),
                    dateStart.getUTCMinutes(),
                    dateStart.getUTCSeconds()
                );
                var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);
                if (timeRemaining >= 0) {
                    days = parseInt(timeRemaining / 86400);
                    timeRemaining = timeRemaining % 86400;
                    hours = parseInt(timeRemaining / 3600);
                    timeRemaining = timeRemaining % 3600;
                    minutes = parseInt(timeRemaining / 60);
                    timeRemaining = timeRemaining % 60;
                    seconds = parseInt(timeRemaining);
                    d.innerHTML = parseInt(days, 10);
                    h.innerHTML = ("0" + hours).slice(-2);
                    m.innerHTML = ("0" + minutes).slice(-2);
                    s.innerHTML = ("0" + seconds).slice(-2);
                } else {
                    return;
                }
            }
        }

        countdown('2024/10/1');
    })
    return (
        <div className="d-flex box_offer">
            <div className="col-3 ">
                <p className="mt-2">پیشنهاد های</p>
                <h2 className="text_amazing" style={{ color: '#03bc06' }}>شگفت انگیز</h2>
                <a href="" className="btn_color btn_offer">مشاهده همه <IoIosArrowBack /></a>

                <p style={{marginTop:'1rem'}}>فقط تا : </p>
                <div className=" box_timer " dir="ltr" style={{  }}>
                    <div className="box_time">
                        <span id="days"></span>
                        <p className="m-0">روز</p>
                    </div>
                    <div className="box_time">
                        <span id="hours"></span>
                        <p className="m-0">ساعت</p>
                    </div>
                    <div className="box_time">
                        <span id="minutes"> </span>
                        <p className="m-0">دقیقه</p>
                    </div>
                    <div className="box_time">
                        <span id="seconds"></span>
                        <p className="m-0">ثانیه</p>
                    </div>
                </div>
            </div>

            <div className="col-9">
                <CarouselOffer />
            </div>
        </div>
    )
}
export default Offer;