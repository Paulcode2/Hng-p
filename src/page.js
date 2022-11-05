import Myimage from './251579258_227759512782657_3864943739883121752_n.jpg'
import Topnav from './_Avatar share button.png'
import Mobilenav from './_Avatar share button (1).png'
import Slack from './slack.png'
import Github from './Icon.png'
import FooterF from './logo.36d2d48a.png'
import FooterS from './I4G.png'
import { Link } from 'react-router-dom'


export default function Page() {
    return (
        <div className="App">

            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="style.css" />
                <title>Front-End Stage 1 Task</title>
            </head>
            <body>


                <button class="Mobile-nav">

                    <img src={Mobilenav} alt="mobile-nav"></img>


                </button>

                <a class="top-nav" href="app.js"
                ><img src={Topnav} alt=""
                    /></a>
                <div>
                    <div class="Profile-section">
                        <img
                            src={Myimage}
                            alt=""
                            id="profile__img"
                        />
                        <div id="twitter">
                            <span>LevitesPaul</span>
                        </div>

                        {/* Slack Name
             <div id="slack">
              <span>Paul</span>
            </div>  */}
                    </div>
                </div>

                <div class="links">
                    <a href="https://twitter.com/levitespaul" target="_blank" rel="noopener noreferrer"
                    ><span>Twitter</span></a
                    >
                    <a href="https://training.zuri.team/" target="_blank" id="btn__zuri" rel="noopener noreferrer"
                    ><span>Zuri Team</span></a
                    >
                    <a href=" http://books.zuri.team" target="_blank" id="books"
                    ><span>Zuri Books</span></a
                    >
                    <a
                        href="https://books.zuri.team/python-for-beginners?ref_id=Paullevites"
                        target="_blank"
                        id="book__python"
                        rel="noopener noreferrer"
                    ><span>Python Books</span></a
                    >
                    <a href="https://background.zuri.team" target="_blank" id="pitch" rel="noopener noreferrer"
                    ><span>Background Check For coders</span>
                    </a>
                    <a
                        href="https://books.zuri.team/design-rules"
                        rel="noopener noreferrer"
                        target="_blank"
                        id="book__design"
                    ><span>Design Books</span></a
                    >
                    <Link to='/contact' id="contact" target="_blank">
                        <span>Contact Me</span>
                    </Link>

                </div>

                <div class="socials">
                    <a href="https://app.slack.com" target="_blank" rel="noopener noreferrer">
                        <img src={Slack} alt="" />
                    </a>

                    <a href="https://github.com/Paulcode2/" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="" />
                    </a>
                </div>



                <footer>
                    <div>
                        <img src={FooterF} alt="" />
                    </div>
                    <div class="footer-text">
                        <p>HNG Internship 9 Frontend Task</p>
                    </div>
                    <div>
                        <img src={FooterS} alt="" />
                    </div>
                </footer>
            </body>

        </div>
    )
}