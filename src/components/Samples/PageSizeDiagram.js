import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.None,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: Enabled.True,
      items: [
        { id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", groupTitleColor: "#4169e1", image: photos.q, itemTitleColor: "#4169e1", phone: "352-206-7599", title: "David Dalton" },
        { id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", groupTitleColor: "#4169e1", image: photos.w, itemTitleColor: "#4b0082", phone: "505-791-1689", title: "Jeanna White" },
        { id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", groupTitleColor: "#4169e1", image: photos.e, itemTitleColor: "#4b0082", phone: "262-215-7998", title: "James Holt" },
        { id: 3, parent: 0, isVisible: true, description: "VP, Server & Tools Marketing and Solutions", email: "thomwill@name.com", groupTitleColor: "#4169e1", image: photos.r, itemTitleColor: "#4b0082", phone: "904-547-5342", title: "Thomas Williams" },
        { id: 4, parent: 1, isVisible: true, description: "VP, Software & Enterprise Management Division", email: "sarakemp@name.com", groupTitleColor: "#4169e1", image: photos.g, itemTitleColor: "#4b0082", phone: "918-257-4218", title: "Sara Kemp" },
        { id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", email: "georduon@name.com", groupTitleColor: "#4169e1", image: photos.x, itemTitleColor: "#4b0082", phone: "434-406-2189", title: "George Duong" },
        { id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", email: "ashlrue@name.com", groupTitleColor: "#4169e1", image: photos.n, itemTitleColor: "#4b0082", phone: "515-324-4969", title: "Ashley Rue" },
        { id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", email: "bonnwede@name.com", groupTitleColor: "#4169e1", image: photos.i, itemTitleColor: "#4b0082", phone: "412-265-2782", title: "Bonnie Wedel" },
        { id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", email: "melihous@name.com", groupTitleColor: "#4169e1", image: photos.p, itemTitleColor: "#4b0082", phone: "630-887-1188", title: "Melissa Houser" },
        { id: 9, parent: 2, isVisible: true, description: "GM, Software Server Solutions Group", email: "abbilaws@name.com", groupTitleColor: "#4169e1", image: photos.a, itemTitleColor: "#4b0082", phone: "530-322-6413", title: "Abbie Lawson" },
        { id: 10, parent: 3, isVisible: true, description: "GM, Connected Systems Division", email: "erneputn@name.com", groupTitleColor: "#4169e1", image: photos.s, itemTitleColor: "#4b0082", phone: "626-831-0555", title: "Ernest Putnam" },
        { id: 11, parent: 3, isVisible: true, description: "CFO, Platforms Products & Services", email: "celecrum@name.com", groupTitleColor: "#4169e1", image: photos.h, itemTitleColor: "#4b0082", phone: "419-578-6479", title: "Celestina Crum" },
        { id: 12, parent: 3, isVisible: true, description: "GM, Pricing", email: "cindturn@name.com", groupTitleColor: "#4169e1", image: photos.j, itemTitleColor: "#4b0082", phone: "530-934-4295", title: "Cindy Turner" },
        { id: 13, parent: 4, isVisible: true, description: "GM, Worldwide Licensing", email: "victsequ@name.com", groupTitleColor: "#4169e1", image: photos.k, itemTitleColor: "#4b0082", phone: "973-883-9137", title: "Victoria Sequeira" },
        { id: 14, parent: 4, isVisible: true, description: "GM, WW Licensing Solutions", email: "normmoor@name.com", groupTitleColor: "#4169e1", image: photos.x, itemTitleColor: "#4b0082", phone: "334-496-5203", title: "Norma Moore" },
        { id: 15, parent: 4, isVisible: true, description: "GM, Marketing and Readiness", email: "carlcard@name.com", groupTitleColor: "#4169e1", image: photos.c, itemTitleColor: "#4b0082", phone: "775-999-3630", title: "Carlos Cardenas" },
        { id: 16, parent: 5, isVisible: true, description: "Sr. VP, Software Core Operating System Division", email: "johngree@name.com", groupTitleColor: "#4169e1", image: photos.v, itemTitleColor: "#4b0082", phone: "937-475-8106", title: "John Green" },
        { id: 17, parent: 5, isVisible: true, description: "VP, Core OS Development", email: "richmora@name.com", groupTitleColor: "#4169e1", image: photos.b, itemTitleColor: "#4b0082", phone: "650-729-6483", title: "Richard Morales" },
        { id: 18, parent: 5, isVisible: true, description: "VP, Software Networking & Device Technologies", email: "charwhit@name.com", groupTitleColor: "#4169e1", image: photos.m, itemTitleColor: "#4b0082", phone: "248-402-6142", title: "Charlotte White" },
        { id: 19, parent: 6, isVisible: true, description: "VP, Security Technology Unit (STU)", email: "robemorg@name.com", groupTitleColor: "#4169e1", image: photos.y, itemTitleColor: "#4b0082", phone: "308-532-6548", title: "Robert Morgan" },
        { id: 20, parent: 6, isVisible: true, description: "GM, Software Serviceability", email: "idabene@name.com", groupTitleColor: "#4169e1", image: photos.a, itemTitleColor: "#4b0082", phone: "765-723-1327", title: "Ida Benefield" },
        { id: 21, parent: 6, isVisible: true, description: "GM, Core Operating System Test", email: "vadaduho@name.com", groupTitleColor: "#4169e1", image: photos.d, itemTitleColor: "#4b0082", phone: "303-333-9215", title: "Vada Duhon" },
        { id: 22, parent: 7, isVisible: true, description: "GM, Global Platform Technologies and Services", email: "willloyd@name.com", groupTitleColor: "#4169e1", image: photos.f, itemTitleColor: "#4b0082", phone: "585-309-6253", title: "William Loyd" },
        { id: 23, parent: 7, isVisible: true, description: "Sr. VP, NAME & Personal Services Division", email: "craiblue@name.com", groupTitleColor: "#4169e1", image: photos.g, itemTitleColor: "#4b0082", phone: "915-355-4705", title: "Craig Blue" },
        { id: 24, parent: 7, isVisible: true, description: "VP, NAME Communications Services and Member Platform", email: "joelcraw@name.com", groupTitleColor: "#4169e1", image: photos.h, itemTitleColor: "#4b0082", phone: "650-623-3302", title: "Joel Crawford" },
        { id: 25, parent: 8, isVisible: true, description: "VP & CFO, NAME", email: "barblang@name.com", groupTitleColor: "#4169e1", image: photos.o, itemTitleColor: "#4b0082", phone: "618-822-7345", title: "Barbara Lang" },
        { id: 26, parent: 8, isVisible: true, description: "VP, NAME Operations", email: "barbfaul@name.com", groupTitleColor: "#4169e1", image: photos.d, itemTitleColor: "#4b0082", phone: "641-678-7646", title: "Barbara Faulk" },
        { id: 27, parent: 8, isVisible: true, description: "VP, NAME Global Sales & Marketing", email: "stewwill@name.com", groupTitleColor: "#4169e1", image: photos.z, itemTitleColor: "#4b0082", phone: "803-746-8733", title: "Stewart Williams" },
        { id: 28, parent: 9, isVisible: true, description: "Sr. VP, NAME Information Services & Merchant Platform", email: "robelemi@name.com", groupTitleColor: "#4169e1", image: photos.y, itemTitleColor: "#4b0082", phone: "425-590-4308", title: "Robert Lemieux" },
        { id: 29, parent: 9, isVisible: true, description: "Chief of Staff, NAME", email: "danirich@name.com", groupTitleColor: "#4169e1", image: photos.o, itemTitleColor: "#4b0082", phone: "605-295-4417", title: "Daniel Richmond" },
        { id: 30, parent: 9, isVisible: true, description: "VP, Developer & Platform Fanatism", email: "allewall@name.com", groupTitleColor: "#4169e1", image: photos.p, itemTitleColor: "#4b0082", phone: "480-472-4961", title: "Allen Wallace" },
        { id: 31, parent: 10, isVisible: true, description: "VP, .ORG Business Development", email: "benrobe@name.com", groupTitleColor: "#4169e1", image: photos.a, itemTitleColor: "#4b0082", phone: "636-827-5128", title: "Ben Roberson" },
        { id: 32, parent: 10, isVisible: true, description: "GM, .ORG Platform Strategy", email: "mattcole@name.com", groupTitleColor: "#4169e1", image: photos.d, itemTitleColor: "#4b0082", phone: "408-978-8597", title: "Matthew Cole" },
        { id: 33, parent: 10, isVisible: true, description: "GM, Global ISVs", email: "janemart@name.com", groupTitleColor: "#4169e1", image: photos.f, itemTitleColor: "#4b0082", phone: "801-897-6086", title: "Janet Martin" },
        { id: 34, parent: 11, isVisible: true, description: "GM, Platform Fanatism", email: "terecart@name.com", groupTitleColor: "#4169e1", image: photos.h, itemTitleColor: "#4b0082", phone: "770-326-1639", title: "Teresa Carter" },
        { id: 35, parent: 11, isVisible: true, description: "Sr. VP, Software Client Business", email: "sallbarn@name.com", groupTitleColor: "#4169e1", image: photos.j, itemTitleColor: "#4b0082", phone: "319-656-8043", title: "Sally Barnes" },
        { id: 36, parent: 11, isVisible: true, description: "VP, Digital Media Division", email: "elmopete@name.com", groupTitleColor: "#4169e1", image: photos.k, itemTitleColor: "#4b0082", phone: "423-307-1301", title: "Elmo Peterson" },
        { id: 37, parent: 12, isVisible: true, description: "VP, Software Client Core Platform Team", email: "marinels@name.com", groupTitleColor: "#4169e1", image: photos.b, itemTitleColor: "#4b0082", phone: "410-325-4416", title: "Maria Nelson" },
        { id: 38, parent: 12, isVisible: true, description: "VP, Software Online", email: "donnpott@name.com", groupTitleColor: "#4169e1", image: photos.w, itemTitleColor: "#4b0082", phone: "856-366-8761", title: "Donna Potts" },
        { id: 39, parent: 12, isVisible: true, description: "VP, Software Product Management & Marketing", email: "nicklamb@name.com", groupTitleColor: "#4169e1", image: photos.r, itemTitleColor: "#4b0082", phone: "425-988-7714", title: "Nick Lambert" }
      ]
    };

    return <div className="mediaPlaceholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
