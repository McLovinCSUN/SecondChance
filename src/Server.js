//imported miragejs to create a fake server to populate the student information on the info page
import {Server} from "miragejs";
import Maria from './images/maria.png';
import Ade from './images/ade.jpg';
import Yazmine from './images/yazmine.jpg';
import Andrew from './images/andrew.png';
import Mir from './images/mir.png';

export function makeServer({environment = "development"} = {}) {

    let server = new Server({
        environment,
        routes() {
            this.get("/api/resources", () => {
                    return {
                        resources: [{
                        id: 1, 
                        name: "Code Tenderloin", 
                        logo:'https://images.squarespace-cdn.com/content/59b6e38fbebafbbecaf263fe/1529804965382-UVXWNSSEWK4ZLSNGHOW4/Code+Tenderloin+WHITE+Type+RGB.png?format=1500w&content-type=image%2Fpng',
                        location: "California", 
                        address: "55 TAYLOR STREET, SAN FRANCISCO, CA, 94102, UNITED STATES", 
                        email: "HELLO@CODETENDERLOIN.ORG", 
                        website: "https://www.codetenderloin.org/", 
                        linkedIn: 'https://www.linkedin.com/company/codetenderloin/',
                        facebook: 'https://www.facebook.com/codetenderloin',
                        instagram: '',
                        twitter: 'https://twitter.com/codetenderloin',
                        remote: true,
                        prisonProgram: false,
                        },
                        {
                        id: 2, 
                        name: "Emergent Works",
                        logo:'https://emergentworks.org/static/logo--horizontal-33c20a205d67d8fddaca4690b8989166.png', 
                        location: "New York", 
                        address: "", 
                        email: "hello@emergentworks.org", 
                        website: "https://emergentworks.org/", 
                        linkedIn: 'https://www.linkedin.com/company/emergentworks/about/',
                        facebook: '',
                        instagram: 'https://www.instagram.com/emergentworks_/',
                        twitter: 'https://twitter.com/emergentworks_',
                        remote: true,
                        prisonProgram: false,
                        },
                        {
                        id: 3, 
                        name: "Justice Through Code",
                        logo:'https://centerforjustice.columbia.edu/sites/default/files/logo/CFJ%20Long%20Logo%20Transparent.png', 
                        location: "New York", 
                        address: "Center for Justice at Columbia University 1190 Amsterdam Avenue, 219 Schermerhorn Hall  New York, NY 10027", 
                        email: "justicethroughcode@columbia.edu", 
                        website: "https://centerforjustice.columbia.edu/justicethroughcode", 
                        linkedIn: 'https://www.linkedin.com/company/justicethroughcode/',
                        facebook: 'https://www.facebook.com/JusticeInitiativeatCU/',
                        instagram: 'https://www.instagram.com/columbiacenterforjustice/',
                        twitter: 'https://twitter.com/JusticeColumbia',
                        remote: true,
                        prisonProgram: false,
                      }, 
                      {
                        id: 4, 
                        name: "Next Chapter",
                        logo:'https://secureservercdn.net/72.167.242.48/dv0.402.myftpupload.com/wp-content/uploads/2020/11/fc-155.png', 
                        location: "California", 
                        address: "", 
                        email: "info@nextchapterproject.org", 
                        website: "https://www.nextchapterproject.org/", 
                        linkedIn: 'https://www.linkedin.com/company/next-chapter-project/',
                        facebook: '',
                        instagram: '',
                        twitter: '',
                        remote: true,
                        prisonProgram: false,
                      },
                           {
                        id: 5, 
                        name: "Reboot LA",
                        logo:'https://jobboardhq.blob.core.windows.net/assets/prod/2ttp/ppsm/employerLogo.png?v=201106003242', 
                        location: "Los Angeles County Residents ONLY", 
                        address: "", 
                        email: "", 
                        website: "http://reboot.la/", 
                        linkedIn: '',
                        facebook: '',
                        instagram: '',
                        twitter: '',
                        remote: true,
                        prisonProgram: false,
                      },
                      {
                        id: 6, 
                        name: "The Last Mile",
                        logo:'https://thelastmile.org/wp-content/uploads/2019/11/The-Last-Mile-LOGO-R-4-HORIZONTAL-750px.jpg', 
                        location: "California, Michigan, Indiana, Kansas, Oklahoma, North Dekota", 
                        address: "548 Market St. PMB 60414 San Francisco, CA 94104", 
                        email: "info@thelastmile.org", 
                        website: "https://thelastmile.org/", 
                        linkedIn: '',
                        facebook: '',
                        instagram: '',
                        twitter: '',
                        remote: false,
                        prisonProgram: true,
                      },
                      {
                        id: 7, 
                        name: "Underdog Devs", 
                        location: "Florida",
                        logo:'https://pbs.twimg.com/profile_images/1386146572161933315/MkL6K8IX_400x400.jpg', 
                        address: "900 E. Pine St., Suite 202, Seattle, WA 98122", 
                        email: "maria.martinez.108@my.csun.edu", 
                        website: "", 
                        linkedIn: 'https://www.linkedin.com/in/underdog-devs-6b9482205/',
                        facebook: '',
                        instagram: '',
                        twitter: 'https://twitter.com/UnderdogDevs',
                        remote: true,
                        prisonProgram: false,
                      },
                      {
                        id: 8, 
                        name: "Unloop",
                        logo:'https://images.squarespace-cdn.com/content/v1/571e9ca79f7266c5847c85bf/1504025275502-VNJLKKASED3YYD68ID60/ke17ZwdGBToddI8pDm48kGw_r0rkjGmydNVDxa87m5sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc-OWZ3vxBSrq9Axs5dB3U2GyrXdG3yLlPSYc16AhleC6ChVqcc7OhJbcr3ynqTCu8/unloop_logo_teal+copy.png', 
                        location: "Washington State", 
                        address: "900 E. Pine St., Suite 202, Seattle, WA 98122", 
                        email: "info@un-loop.org", 
                        website: "https://www.un-loop.org/programs/", 
                        linkedIn: 'https://www.linkedin.com/company/unloopwa/',
                        facebook: 'https://www.facebook.com/unloopwa',
                        instagram: '',
                        twitter: 'https://twitter.com/un_loop',
                        remote: true,
                        prisonProgram: true,
                      },
                  ]
                }
                }
            )
            this.get("/api/stories", () => {
                return {
                    stories: [{
                        id: 1, 
                        name: "Maria", 
                        program: "Emergent Works, Justice Through Code, Underdog Devs", 
                        testimony: "After completing Emergent Works cohort over the winter I learned how to use git properly and developed a mobile application using React Native. Justice Through Code has made me more confortable with Python. Underdog Devs has a whole community to help you grow your tech skills and soft skills. With these programs I would have not been able to build my portfolio and land an internship with Disney Tech this summer!", 
                        pic: Maria, 
                    },
                   {
                    id: 2, 
                        name: "Ade", 
                        program: "Emergent Works", 
                        testimony: "Joining the Winter cohort I was partnered up with a mentor who thaught me JavaScript and ReactJS. I am excited to land a webdeveloper role soon.", 
                        pic: Ade, 
                    },
                    {                       
                      id: 3, 
                        name: "Yazmine", 
                        program: "Reboot LA", 
                        testimony: "I enjoyed getting a stipend while learning to code. It was difficult getting the concepts but the instructor made himself avalible and I learned a lot.", 
                        pic: Yazmine,
                    },
                     {
                      id: 4, 
                        name: "Andrew", 
                        program: "Code Tenderloin", 
                        testimony: "On site facility and remote settting. After I was done with the program they helped me land a frontend developer role.", 
                        pic: Andrew, 
                    },
                     {
                 id: 5, 
                        name: "Mir", 
                        program: "The Last Mile", 
                        testimony: "I was incarcerated for over 10+ years and did not have any clue on what I was going to do after released, but when I found out The Last Mile was going to be teaching programming classes I was curious and reached out. I am glad I did. After paroling they helped me land a job as a web developer. I am so greatful!", 
                        pic: Mir,  
                    },
                    ]}})
            this.get("/api/media", () => {
                return {
                    media: [{
                        id: 1, 
                        date: 'February 17, 2021',
                        title: "Justice Through Code Program Featured in Amazon Web Services Short Documentary", 
                        link: "https://centerforjustice.columbia.edu/news/justice-through-code-program-featured-amazon-web-services-short-documentary", 
                        pic: 'https://centerforjustice.columbia.edu/sites/default/files/styles/cu_crop/public/content/JTC%20Video%20Web%20Banner_0.png?itok=UoHTedEP',
                      },
                      {
                        id: 2, 
                        date: 'October 8th, 2020',
                        title: "Next Chapter aims to reshape society’s perspective of people returning home from prison", 
                         link: "https://slack.com/blog/collaboration/next-chapter-panel-slack-frontiers", 
                        pic: 'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2020-10-slack-frontiers-next-chapter-hero.jpg',
                      },
                      {
                        id: 3, 
                        date: 'December 03, 2020',
                        title: "Tech Incubator Gives Former Prisoners Fresh Start", 
                        link: "https://spectrumnews1.com/ca/la-west/human-interest/2020/12/04/tech-incubator-gives-former-prisoners-fresh-start?cid=share_clip", 
                        pic: 'http://reboot.la/wp-content/uploads/2020/12/Smiling-Latina-with-Laptop-1024x768.jpg',
                      },
                       {
                        id: 4, 
                        date: 'Octorber 23, 2020',
                        title: "Sabio and the City of Los Angeles announce a partnership, RebootLA Tech Incubator, to provide technical and entrepreneurial incubation to returning citizens in the City of LA.", 
                        link: "https://www.prnewswire.com/news-releases/sabio-and-the-city-of-los-angeles-announce-a-partnership-rebootla-tech-incubator-to-provide-technical-and-entrepreneurial-incubation-to-returning-citizens-in-the-city-of-la-301159006.html", 
                        pic: 'http://reboot.la/wp-content/uploads/2020/10/Sabio-Alumni_Copresidents-FutureWork-edited-1-1024x682.jpeg',
                      },

                    ],
                
                }
            })
        }
        
      })
        
  return server;
}