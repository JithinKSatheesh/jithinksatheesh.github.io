import React from 'react'
import Icon from '../Utilities/Icon'

import icon_nodejs from '../../images/Iconnodejs.png'
import icon_reactjs from '../../images/Iconreactjs.png'
import icon_expressjs from '../../images/iconexpress.png'
import icon_mongodb from '../../images/iconmongodb.png'
import icon_html from '../../images/Iconhtml.png'
import icon_css from '../../images/Iconcss.png'
import icon_js from '../../images/Iconjs.png'
import icon_illustrator from '../../images/Iconillustrator.png'
import icon_XD from '../../images/iconXD.png'
import iconpremere from '../../images/Iconpremere.png'
import iconpostman from '../../images/iconpostman.png'
import icongithub from '../../images/icongithub.png'


function Widget1(props) {
    return (
        <>
            <div className="p-2">
                <div className="small font-weight-bold">
                    <svg fill="#e63850" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
                    &nbsp;
                    STATUS
                </div>
                <div className="space-20"></div>
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-10">
                        <div className="h5">
                            I am a fullstack developer
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

function Widget2(props) {
    return (
        <>
            <div className="p-3">
                <div className="small font-weight-bold">
                    <svg fill="#e63850" width="24" height="24" viewBox="0 0 24 24"><path d="M23.27 19.743l-11.946-11.945c-.557-.557-.842-1.331-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.375-1.537-3.723-1.537-.507 0-1.015.072-1.506.216l3.17 3.17c.344 1.589-1.959 3.918-3.566 3.567l-3.17-3.17c-.145.492-.217 1-.217 1.509 0 1.347.51 2.691 1.537 3.721 1.135 1.136 2.66 1.646 4.146 1.53.783-.06 1.557.226 2.113.783l11.947 11.944c.468.468 1.103.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.73-1.763zm-1.77 2.757c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm-8.375-15.753l6.723-6.747 4.152 4.128-6.722 6.771-1.012-1.012 5.488-5.533c.165-.165.165-.435-.001-.602-.166-.165-.436-.165-.601 0l-5.489 5.533-.935-.936 5.495-5.539c.166-.166.166-.437 0-.603-.168-.166-.436-.166-.603.001l-5.494 5.539-1.001-1zm-3.187 9.521l-5.308 5.35c-.166.166-.437.166-.603 0-.165-.166-.166-.436 0-.602l5.308-5.351-.936-.935-5.301 5.343c-.165.168-.435.167-.601.001-.166-.167-.166-.436 0-.602l5.3-5.343-1.004-1.004-5.745 5.787-1.048 5.088 5.203-.937 5.743-5.786-1.008-1.009z" /></svg>
                    &nbsp;
                    MY SKILLS
                </div>
                <div className="space-20"></div>
                <div className="row d-flex">

                    <Icon name={"node js"} image={icon_nodejs} />
                    <Icon name={"React js"} image={icon_reactjs} />
                    <Icon name={"Express js"} image={icon_expressjs} />
                    <Icon name={"Mongo DB"} image={icon_mongodb} />
                    <Icon name={"HTML"} image={icon_html} />
                    <Icon name={"CSS"} image={icon_css} />
                    <Icon name={"JavaScript"} image={icon_js} />

                </div>

            </div>
        </>
    )
}

function Widget3(props) {
    return (<>
        <div className="p-3">
            <div className="small font-weight-bold">
            <svg  fill="#e63850" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
                    &nbsp;
                    Contact me
                </div>
            <div className="space-20"></div>
            <div className="row">
                    <div className="col-3">
                        Mail <br/><br/>
                    </div>
                    <div className="col-9">
                        <div className="h6">
                            jithinksatheesh@icloud.com
                        </div>
                    </div>
                    <div className="col-3">
                        Github <br/><br/>
                    </div>
                    <div className="col-9">
                        <div className="h6">
                            github.com/jithinksatheesh
                        </div>
                    </div>
                    <div className="col-3">
                        Linkedin
                    </div>
                    <div className="col-9">
                        <div className="h6">
                            linkedin.com/jithinksatheesh
                        </div>
                    </div>
                    
                </div>
        </div>
    </>)
}

const timeline = [
    {
        event:"Fullstack ",
        Value:" Banzan Studios",
    },
    {
        event:"Developer",
        Value:"Trebuchet.org",
    },
    {
        event:"Software Intern",
        Value:" Hapiens Digital",
    },
    {
        event:"Organiser",
        Value:" Innovators summit",
    },
    {
        event:"Tech Head ",
        Value:" Dhishna Techfest",
    },
    {
        event:"Organiser ",
        Value:" Make-a-Ton (Hackathon event)",
    },
    {
        event:"Education",
        Value:" Cochin University of Science and Technology",
    },
    

]



function Widget4(props) {
    return (<>
        <div className="p-3">
            <div className="small font-weight-bold">
                    <svg fill="#e63850"  width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"/></svg>
                    &nbsp;
                    My timeline
                </div>
            <div className="space-20"></div>
            <div className="row">

                {timeline.map((item)=>{
                    return (
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4 borderRightLine">
                                    {item.event} 
                                </div>
                                <div className="col-8">
                                    <div className="h6">
                                        <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" /></svg>
                                        &nbsp;
                                        {item.Value}
                                        <br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
                    

                </div>
        </div>
    </>)
}

function Widget5(props) {
    return (
        <>
            <div className="p-3">
                <div className="small font-weight-bold">
                    <svg fill="#e63850" width="24" height="24" viewBox="0 0 24 24"><path d="M23.27 19.743l-11.946-11.945c-.557-.557-.842-1.331-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.375-1.537-3.723-1.537-.507 0-1.015.072-1.506.216l3.17 3.17c.344 1.589-1.959 3.918-3.566 3.567l-3.17-3.17c-.145.492-.217 1-.217 1.509 0 1.347.51 2.691 1.537 3.721 1.135 1.136 2.66 1.646 4.146 1.53.783-.06 1.557.226 2.113.783l11.947 11.944c.468.468 1.103.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.73-1.763zm-1.77 2.757c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm-8.375-15.753l6.723-6.747 4.152 4.128-6.722 6.771-1.012-1.012 5.488-5.533c.165-.165.165-.435-.001-.602-.166-.165-.436-.165-.601 0l-5.489 5.533-.935-.936 5.495-5.539c.166-.166.166-.437 0-.603-.168-.166-.436-.166-.603.001l-5.494 5.539-1.001-1zm-3.187 9.521l-5.308 5.35c-.166.166-.437.166-.603 0-.165-.166-.166-.436 0-.602l5.308-5.351-.936-.935-5.301 5.343c-.165.168-.435.167-.601.001-.166-.167-.166-.436 0-.602l5.3-5.343-1.004-1.004-5.745 5.787-1.048 5.088 5.203-.937 5.743-5.786-1.008-1.009z" /></svg>
                    &nbsp;
                    Tools
                </div>
                <div className="space-20"></div>
                <div className="row d-flex">

                    <Icon name={"illustrator"} image={icon_illustrator} />
                    <Icon name={"Adobe XD"} image={icon_XD} />
                    <Icon name={"Premier Pro"} image={iconpremere} />
                    <Icon name={"Postman"} image={iconpostman} />
                    <Icon name={"Github"} image={icongithub} />

                </div>

            </div>
        </>
    )
}

export { Widget1, Widget2, Widget3,Widget4,Widget5 }

