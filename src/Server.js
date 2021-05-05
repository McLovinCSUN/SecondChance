//imported miragejs to create a fake server to populate the student information on the info page
import { Server, Model } from "miragejs";
import Maria from './images/maria.png';
import Ade from './images/ade.jpg';
import Yazmine from './images/yazmine.jpg';
import Andrew from './images/andrew.png';
import Mir from './images/mir.png';

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      resource: Model,
      story: Model,
    },

    seeds(server) {
        server.create("resource", {
                        id: 1, 
                        name: "Code Tenderloin", 
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
                    })
        server.create("resource", {
                        id: 2, 
                        name: "Emergent Works", 
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
                    })
        server.create("resource", {
                        id: 3, 
                        name: "Justice Through Code", 
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
                    })
        server.create("resource", {
                        id: 4, 
                        name: "Next Chapter", 
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
                    })
        server.create("resource", {
                        id: 5, 
                        name: "Reboot LA", 
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
                    })
      server.create("resource", {
                        id: 6, 
                        name: "The Last Mile", 
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
                    })
                     server.create("resource", {
                        id: 7, 
                        name: "Underdog Devs", 
                        location: "Florida", 
                        address: "900 E. Pine St., Suite 202, Seattle, WA 98122", 
                        email: "maria.martinez.108@my.csun.edu", 
                        website: "", 
                        linkedIn: 'https://www.linkedin.com/in/underdog-devs-6b9482205/',
                        facebook: '',
                        instagram: '',
                        twitter: 'https://twitter.com/UnderdogDevs',
                        remote: true,
                        prisonProgram: false,
                    })
                     server.create("resource", {
                        id: 8, 
                        name: "Unloop", 
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
                    })
           server.create("story", {
                        id: 1, 
                        name: "Maria", 
                        program: "Emergent Works, Justice Through Code, Underdog Devs", 
                        testimony: "After completing Emergent Works cohort over the winter I learned how to use git properly and developed a mobile application using React Native. Justice Through Code has made more confortable with Python. Underdog Devs has a whole community to help you grow your tech skills and soft skills. With these programs I would have not been able to build my portfolio and land an internship with Disney Tech this summer!", 
                        pic: Maria, 
                    })
                server.create("story", {
                        id: 2, 
                        name: "Ade", 
                        program: "Emergent Works", 
                        testimony: "Joining the Winter cohort I was partnered up with a mentor who thaught me JavaScript and ReactJS. I am excited to land a webdeveloper role soon.", 
                        pic: Ade, 
                    })
             server.create("story", {
                        id: 3, 
                        name: "Yazmine", 
                        program: "Reboot LA", 
                        testimony: "I enjoyed getting a stipend while learning to code. It was difficult getting the concepts but the instructor made himself avalible and I learned a lot.", 
                        pic: Yazmine, 
                    })     
           server.create("story", {
                        id: 4, 
                        name: "Andrew", 
                        program: "Code Tenderloin", 
                        testimony: "On site facility and remote settting. After I was done with the program they helped me land a frontend developer role.", 
                        pic: Andrew, 
                    })
           server.create("story", {
                        id: 5, 
                        name: "Mir", 
                        program: "The Last Mile", 
                        testimony: "I was incarcerated for over 10+ years and did not have any clue on what I was going to do after released, but when I found out The Last Mile was going to be teaching programming classes I was curious and reached out. I am glad I did. After paroling they helped me land a job as a web developer. I am so greatful!", 
                        pic: Mir, 
                    }) 
          
      },

     

    routes() {
      this.namespace = "api"

      this.get("/resources", schema => {
        return schema.resources.all()
      })
       this.get("/stories", schema => {
        return schema.stories.all()
      })
    },
  })

  return server
}