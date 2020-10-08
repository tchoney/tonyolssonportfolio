import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[ `CV`, `history`, `references`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
        

          <h2 id="heading-level-2">Experince</h2>
          <h3 id="unordered">
            <strong>
              <strong>Nordic Morning</strong>
            </strong>
             </h3>
             <p>Lead Ux and service design. Responsibilities included business development, sales, offerings development and internal process building. Client work</p>
         
          <ul>
            <li>
              <strong>
              <strong>AAK personal care</strong>
            </strong>/ ​Lead Service Design 2020 - present, Globally Design strategy. Web platform design.
            </li>

            <li>
              <strong>
              <strong>Assa Abloy Entrance systems </strong>
            </strong>/ ​Product Designer 2019 - present, Globally Design strategy. Design of leads generating tools.
            </li>

            <li>
              <strong>
              <strong>ADB Safegate</strong>
            </strong>/ ​Design Strategist/ Lead designer 2019 - present, Globally Design strategy and business development. Workshop facilitation. Design lead for global web.
            </li>

            <li>
              <strong>
              <strong>Kährs flooring</strong>
            </strong>/ ​Design Strategist/Lead designer 2019 - present, Globally Design strategy and business development. Workshop facilitation. Digitalization strategist.
            </li>

            <li>
              <strong>
              <strong>Brenderup Trailer</strong>
            </strong>/ ​Design Strategy 2019 - present, Globally Design strategy and business development. Workshop facilitation. Digitalization strategist. Product design.
            </li>

            <li>
              <strong>
              <strong>Duni</strong>
            </strong>/ ​Design strategist 2019 , Malmö, Sweden Design strategy and workshop facilitation.
            </li>

            <li>
              <strong>
              <strong>Loreal</strong>
            </strong> / ​Ux design 2019 , Nordics Concept development. Prototyping.
            </li>

          </ul>

       
          <h3 id="unordered">
            <strong>
              <strong>Softhouse Consulting</strong>
            </strong>
             </h3>
             <p>Jan 2018 - 2019, Malmö Design consultant and design strategist. Focusing on digital product development for all standard platforms. Internal Design lead, building up internal design team and design education. Clients work:</p>
         
          <ul>
            <li>
              <strong>
              <strong>Tetra Pak</strong>
            </strong>/ ​Product Designer Mar 2019 - Sep 2019, Lund, Sweden Design of business intelligence visualization toolkit .
            </li>

            <li>
              <strong>
              <strong>Assa Abloy Entrance systems </strong>
            </strong> /Ux designer Feb- 2018 - Mar 2019, Globally Development of consumer and service technician app for revolving and sliding doors.
            </li>

            <li>
              <strong>
              <strong>Cedes</strong>
            </strong>/ ​Ux designer Apr 2018 - Dec 2019 Landquart, Switzerland Development of service technician mobile application. Focus on sensor technology and 3d visualization.
            </li>

            <li>
              <strong>
              <strong>ELO Language</strong>
            </strong>/ ​Product Designer Apr 2018 - SEP 2018, Lund, Sweden Design and concept development for a browser based language training tool.
            </li>

            <li>
              <strong>
              <strong>Tetra Pak</strong>
            </strong>/ ​Product Designer, sprint facilitator Aug 2018 - Sep 2019, Lund, Sweden Design of vibration analytics data visualisation and user interface for internal stakeholders.
            </li>

            <li>
              <strong>
              <strong>ABB</strong>
            </strong>/ ​Product Designer Mar 2018 - June 2018, Ludvika, Sweden Product designer, mobile application for indoor office navigation and sensor visualization.
            </li>

            <li>
              <strong>
              <strong>Reqs</strong>
            </strong> / ​Product Designer Feb 2018 - June 2018, Malmö, Sweden Product designer, mobile application for building sensor network visualization and maintenance.
            </li>

          </ul>

          <h3 id="unordered">
            <strong>
              <strong>European Commission </strong>
            </strong>
             </h3>
             <p>​Interaction Designer Jan 2014 - Jan 2015, Malmö, Sweden
Design research and concept development for digital learning environments focusing on S.T.E.M learning.</p>

<h3 id="unordered">
            <strong>
              <strong>Malmö University</strong>
            </strong>
             </h3>
             <p>​IOIO Lab manager Feb 2011 - June 2018, Malmö, Sweden
Part of founding the IOIO laboratory at the University where I eventually took on the role as lab manager. Responsibility included planning and running all of the laboratories educational engagements as well as staffing and training Teaching assistants. This included teaching and mentoring the TAs in design and technological pedagogy.</p>

<h3 id="unordered">
            <strong>
              <strong>Malmö University</strong>
            </strong>
             </h3>
             <p>​​Adjunct lecturer Feb 2008 - Jan 2018, Malmö, Sweden
Lecturer in interaction design, service design, digital prototyping. Course responsible for Physical prototyping, Programing for interactivity and final thesis course in interaction design.
During my time I also worked with the departments of product design, visual design, information architecture, system engineering, computer science and game design.
I also worked as a guest lecture at the following institutions</p>
<ul>
<li>
ITU, it university of Copenhagen, Denmark
</li>

<li>
Hyper Island, Karlskrona, Sweden
</li>

<li>
University of AArhus, Denmark
</li>

<li>
Teeks electronics Aart center, Trondheim, Norway
</li>

<li>
Domus Academy, Milan, Italy
</li>

<li>
Lund University, faculty of engineering, Helsingborg Sweden
</li>

<li>
Lasalle college of Art, Singapore
</li>

<li>
Cape town University of technology, South Africa
</li>

<li>
Tecnologico de Monterrey Campus Queretaro, Mexico
</li>
  
</ul>

<h3 id="unordered">
            <strong>
              <strong>Arduino Foundation</strong>
            </strong>
             </h3>
             <p>​Jan 2009 - Sep 2013, Malmö, Sweden Designing online educational content and videos. Beta tester.</p>

             <h3 id="unordered">
            <strong>
              <strong>Libelium</strong>
            </strong>
             </h3>
             <p>​Designer, Developer
Jan 2009 - Dec 2009, Malmö, Sweden
Software development and documentation for the Waspmote wireless sensor controller</p>

             <h3 id="unordered">
            <strong>
              <strong>1scale1</strong>
            </strong>
             </h3>
             <p>​ Senior Interaction designer ​/ Founder Mar 2007 - Jan 2013, Malmö, Sweden
Founder and design lead of a design studio focusing on rapid concept development and technology prototyping. One of the studio's main clients and collaborators was the municipality of Malmö and STPL kulture center in Malmö.</p>
<hr />

<h2 id="heading-level-2">Education</h2>
          <h3 id="unordered">
            <strong>
              <strong>Malmö University ​/M.A Computer Science</strong>
            </strong>
             </h3>
             <p>CLASS OF 2016 Focus on technologies and concept essential for the development of complex systems.</p>

             <h3 id="unordered">
            <strong>
              <strong>Malmö University ​/B.A Interaction design</strong>
            </strong>
             </h3>
             <p>CLASS OF 2009
Focus on creating useful, interactive, utility-oriented design, expressive design for pleasure, as well as critical and aesthetic-oriented design. Interaction design is an area that has emerged in response to the digital properties of the material. The education borrows theory and methods
from traditional design, informatics, social sciences, humanities and arts​.</p>

             <h3 id="unordered">
            <strong>
              <strong>Malmö University ​/B.A Philosophy</strong>
            </strong>
             </h3>
             <p>CLASS OF 2006
Focus on practical philosophy within the area of moral, value and politics. Combined degree with studies in Media and Communication with a focus on mediated information impacts on society</p>

             <h3 id="unordered">
            <strong>
              <strong>Falkenberg Art School ​/Associate Arts (AA)</strong>
            </strong>
             </h3>
             <p>CLASS OF 2003
Major in traditional painting and sculpture</p>

<h3 id="unordered">
            <strong>
              <strong>Scrum Alliance /Product Owner</strong>
            </strong>
             </h3>
             <p>Jan 2019
Certified scrum product owner</p>
         
<hr />      
          
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
