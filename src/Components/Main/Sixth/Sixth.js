import Card from "../../../images/icons/logo__dcojfwkzna2q_medium.png";
import logo from "../../../images/icons/logo_tradein__d1fpktgipvki_large.png";
function Sixth() {
    return (
        <div>
            <section className="sixth-hightlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>
                                <div class="description-wraper black">
                                    Get $200-$650 in credit when you trade in iPhone 11 or higher.<sup><a href="#footnote-1"
                                        class="footnote" aria-label="Footnote 1">1</a></sup>
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="/#">See what your device is worth </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={Card} alt="card logo" />
                                    </div>
                                </div>
                                <div className="description-wraper">
                                    Get up to 3% Daily Cash back with every purchase.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="/#">Learn more</a></li>
                                        <li><a href="/#">Apply now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Sixth;
