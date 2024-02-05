// import Apple from "../../images/icons/apple-tv-logo.png";
import ipadpro from "../../../images/icons/promo_m2_chip__enw2kz91lsuq_large.png";
import Watch from "../../../images/icons/hero_logo_apple_watch_series_9__eg5xcrxghuaa_small.png";

function Fifth() {
    return (
        <div>
            <section className="fifth-hightlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="title-wraper bold">
                                        iPad Pro
                                    </div>
                                    <div className="logo-wrapper">
                                        Supercharged by
                                        <img src={ipadpro} alt="ipad" />
                                    </div>
                                    <div className="links-wrapper">
                                        <ul>
                                            <li><a href="/#">Learn more</a></li>
                                            <li><a href="/#">Buy</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- <div class="tvshow-logo-wraper">
							<img src="images/home/banker.png">
						</div> -->

						<!-- <div class="watch-more-wrapper">
							<a href="#">Watch now on the Apple TV App</a>
						</div> --> */}
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={Watch} alt="" />
                                    </div>
                                </div>
                                <div className="description-wraper">
                                    A healthy leap ahead.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="/#">Learn more</a></li>
                                        <li><a href="/#">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Fifth;
