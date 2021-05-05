//imported miragejs to create a fake server to populate the student information on the info page
import { Server, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      student: Model,
    },

    seeds(server) {
        server.create("student", {
                        id: 1, 
                        name: "Maria Martinez", 
                        student_id: "123456789", 
                        address: "12345 Nordhoff St, Northridge, CA 99999", 
                        email: "maria@internet.com", major: "comp-sci", 
                        pic: './images/maria.png'
                    })
        server.create("student",  {
                        id: 2, 
                        name: "Dwayne Johnson", 
                        student_id: "123456789", 
                        address: "12345 Nordhoff St, Northridge, CA 99999", 
                        email: "therock@internet.com", major: "comp-sci", 
                        pic: "./images/rock.png",
                    })
        server.create("student", {
                        id: 3, 
                        name: "Maria Martinez", 
                        student_id: "123456789", 
                        address: "12345 Nordhoff St, Northridge, CA 99999", 
                        email: "maria@internet.com", major: "comp-sci", 
                        pic: './images/maria.png'
                    })
        server.create("student",  {
                        id: 4, 
                        name: "Dwayne Johnson", 
                        student_id: "123456789", 
                        address: "12345 Nordhoff St, Northridge, CA 99999", 
                        email: "therock@internet.com", major: "comp-sci", 
                        pic: './images/rock.png'
                    })
        server.create("student", {
                        id: 5, 
                        name: "Maria Martinez", 
                        student_id: "123456789", 
                        address: "12345 Nordhoff St, Northridge, CA 99999", 
                        email: "maria@internet.com", major: "comp-sci", 
                        pic: './images/maria.png'
                    })
      server.create("student",  {
                        id: 6, 
                        name: "Dwayne Johnson", 
                        student_id: "123456789", 
                        address: "12345 Nordhoff St, Northridge, CA 99999", 
                        email: "therock@internet.com", major: "comp-sci", 
                        pic: './images/rock.png'
                    })
    },

    routes() {
      this.namespace = "api"

      this.get("/students", schema => {
        return schema.students.all()
      })
    },
  })

  return server
}