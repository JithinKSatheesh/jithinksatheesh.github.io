import React from 'react'
import {Showcard1} from './ShowCards'
import project1 from '../../images/project1.png'
import projetGolden from '../../images/Projects/project_golden.png'
import project_apple from '../../images/Projects/project_apple.png'
import project_palace from '../../images/Projects/project_palace.png'
import project_lawfirm from '../../images/Projects/project_lawfirm.png'
import project_banzan from '../../images/Projects/project_banzan.png'

function Showcasecontents1(props) {
    

    return (
        <>
            <Showcard1 image={projetGolden} title={"Goldencrowd team website"} visit={"https://goldencrowd.github.io/"}/>
            <Showcard1 image={project_banzan} title={"Banzan studios official website"} visit={"https://www.banzan.co"}/>
            <Showcard1 image={project_palace} title={"Story teller interactive website"}  visit={"https://jithinksatheesh.github.io/parallaxzoom/"} />
            <Showcard1 image={project_lawfirm} title={"Law Firm website"} visit={"https://jithinksatheesh.github.io/lawfirm/"} />
            <Showcard1 image={project_apple} title={"CSS ART tutorial"} visit={"https://jithinksatheesh.github.io/CSS_ART/"}/>
            {/* <Showcard1 image={project1}/>  */}
        </>
    )
}

export {Showcasecontents1}
