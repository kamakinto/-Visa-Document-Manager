/**
 * Created by everettrobinson on 2/6/17.
 */
var userData = [
    {name: "Robbie Robinson", completedPercent: 69, appointmentDate: "11/2/2017"},
    {name: "Oriane Rosenthal", completedPercent: 95, appointmentDate: "1/12/2017"},
    {name: "Alex Maddox", completedPercent: 10, appointmentDate: "07/2/2017"},




]
//TODO: associate the uuid with the oid in the list of users, then upload to mongodb
const documentData = [{
    "uuid": "58a6cc42fc13ae6e2b000d85",
    "name": "Porta.xls",
    "status": "processing",
    "due_date": "04/07/2017",
    "condition": "excellent",
    "comments": "Duis consequat dui nec nisi volutpat eleifend."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d86",
    "name": "ConvallisMorbi.ppt",
    "status": "complete",
    "due_date": "06/02/2017",
    "condition": "excellent",
    "comments": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d87",
    "name": "Vel.xls",
    "status": "complete",
    "due_date": "06/19/2017",
    "condition": "re-upload",
    "comments": "Aliquam quis turpis eget elit sodales scelerisque."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d88",
    "name": "Eu.doc",
    "status": "complete",
    "due_date": "07/21/2017",
    "condition": "good",
    "comments": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d89",
    "name": "AnteIpsum.ppt",
    "status": "complete",
    "due_date": "08/04/2017",
    "condition": "excellent",
    "comments": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8a",
    "name": "Quis.xls",
    "status": "uploaded",
    "due_date": "10/06/2017",
    "condition": "re-upload",
    "comments": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8b",
    "name": "IpsumPraesentBlandit.ppt",
    "status": "uploaded",
    "due_date": "10/30/2017",
    "condition": "re-upload",
    "comments": "Aliquam erat volutpat."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8c",
    "name": "AccumsanTellusNisi.ppt",
    "status": "missing",
    "due_date": "09/11/2017",
    "condition": "excellent",
    "comments": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8d",
    "name": "Congue.pdf",
    "status": "uploaded",
    "due_date": "04/14/2017",
    "condition": "poor",
    "comments": "Etiam pretium iaculis justo. In hac habitasse platea dictumst."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8e",
    "name": "UltricesVelAugue.xls",
    "status": "complete",
    "due_date": "08/14/2017",
    "condition": "poor",
    "comments": "Fusce consequat. Nulla nisl."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8f",
    "name": "NullaSed.doc",
    "status": "processing",
    "due_date": "04/30/2017",
    "condition": "excellent",
    "comments": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d90",
    "name": "OdioDonecVitae.xls",
    "status": "uploaded",
    "due_date": "07/19/2017",
    "condition": "re-upload",
    "comments": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d91",
    "name": "NullaNislNunc.xls",
    "status": "processing",
    "due_date": "05/28/2017",
    "condition": "poor",
    "comments": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d92",
    "name": "ConvallisNunc.pdf",
    "status": "processing",
    "due_date": "07/18/2017",
    "condition": "excellent",
    "comments": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d93",
    "name": "Ante.ppt",
    "status": "processing",
    "due_date": "01/15/2018",
    "condition": "re-upload",
    "comments": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d94",
    "name": "PosuereCubilia.xls",
    "status": "uploaded",
    "due_date": "04/12/2017",
    "condition": "good",
    "comments": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d95",
    "name": "FermentumJustoNec.xls",
    "status": "missing",
    "due_date": "03/02/2018",
    "condition": "poor",
    "comments": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d96",
    "name": "Diam.xls",
    "status": "processing",
    "due_date": "02/27/2018",
    "condition": "excellent",
    "comments": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d97",
    "name": "AccumsanFelis.ppt",
    "status": "processing",
    "due_date": "01/06/2018",
    "condition": "poor",
    "comments": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d98",
    "name": "MetusAeneanFermentum.xls",
    "status": "missing",
    "due_date": "11/21/2017",
    "condition": "re-upload",
    "comments": "Morbi non quam nec dui luctus rutrum."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d99",
    "name": "SitAmet.xls",
    "status": "complete",
    "due_date": "10/08/2017",
    "condition": "re-upload",
    "comments": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d9a",
    "name": "MusEtiam.xls",
    "status": "uploaded",
    "due_date": "07/23/2017",
    "condition": "poor",
    "comments": "Duis mattis egestas metus."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d9b",
    "name": "TristiqueFusce.doc",
    "status": "processing",
    "due_date": "05/25/2017",
    "condition": "poor",
    "comments": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d9c",
    "name": "PotentiIn.ppt",
    "status": "complete",
    "due_date": "02/06/2018",
    "condition": "good",
    "comments": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d9d",
    "name": "TristiqueEstEt.xls",
    "status": "missing",
    "due_date": "02/08/2018",
    "condition": "poor",
    "comments": "Pellentesque at nulla. Suspendisse potenti."
}, {
    "uuid": "58a6cc42fc13ae6e2b000d9e",
    "name": "IpsumPrimis.xls",
    "status": "missing",
    "due_date": "08/24/2017",
    "condition": "poor",
    "comments": "Pellentesque at nulla."

}]

module.exports = userData;