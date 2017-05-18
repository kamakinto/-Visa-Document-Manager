/**
 * Created by everettrobinson on 2/6/17.
 */
var userData = [
    {name: "Robbie Robinson", completedPercent: 69, appointmentDate: "11/2/2017"},
    {name: "Oriane Rosenthal", completedPercent: 95, appointmentDate: "1/12/2017"},
    {name: "Alex Maddox", completedPercent: 10, appointmentDate: "07/2/2017"},




]

const documentData2 = [{
    "uuid": "58a6cc42fc13ae6e2b000d85",
    "name": "Tortor.ppt",
    "status": "Complete",
    "due_date": "08/13/2017",
    "condition": "Good",
    "comments": [
        {
            "author_id": "c661722c-3962-41a4-8f23-324f273b9736",
            "author_name": "Brook Zanni",
            "timestamp": "04/11/2017",
            "comment": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
            "photo_url": "http://dummyimage.com/212x243.bmp/cc0000/ffffff"
        },
        {
            "author_id": "bd0af6ad-d59d-4022-a5dc-dd096b83f308",
            "author_name": "Bryana Hendriksen",
            "timestamp": "05/30/2016",
            "comment": "Aliquam erat volutpat.",
            "photo_url": "http://dummyimage.com/228x105.bmp/dddddd/000000"
        },
        {
            "author_id": "4d41b7f7-686d-4f12-8c3b-b862db75b48e",
            "author_name": "Mimi Bysh",
            "timestamp": "08/09/2016",
            "comment": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
            "photo_url": "http://dummyimage.com/168x192.jpg/dddddd/000000"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d86",
    "name": "PlateaDictumstAliquam.ppt",
    "status": "Missing",
    "due_date": "03/13/2018",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "5d257198-0afe-450e-8e6f-3b396a3ae78a",
            "author_name": "Consuela Dunstall",
            "timestamp": "11/17/2016",
            "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque.",
            "photo_url": "http://dummyimage.com/148x127.bmp/cc0000/ffffff"
        },
        {
            "author_id": "cccfe8cd-13d1-462d-a195-ddd63466f30b",
            "author_name": "Darnall Graham",
            "timestamp": "11/24/2016",
            "comment": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
            "photo_url": "http://dummyimage.com/244x185.png/cc0000/ffffff"
        },
        {
            "author_id": "b1df7ca2-a608-436e-b511-0691321ec314",
            "author_name": "Petronia Longlands",
            "timestamp": "06/13/2016",
            "comment": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
            "photo_url": "http://dummyimage.com/245x105.jpg/cc0000/ffffff"
        },
        {
            "author_id": "e92b096f-22d4-4b1f-93d5-10b7e5b01730",
            "author_name": "Gwenette Millin",
            "timestamp": "06/10/2016",
            "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
            "photo_url": "http://dummyimage.com/196x217.jpg/cc0000/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d87",
    "name": "SapienSapienNon.xls",
    "status": "Uploaded",
    "due_date": "04/22/2018",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "5a14aa54-6108-4faa-98a0-2e4a5c142007",
            "author_name": "Timmy Newnham",
            "timestamp": "12/17/2016",
            "comment": "Vivamus vestibulum sagittis sapien.",
            "photo_url": "http://dummyimage.com/170x115.jpg/dddddd/000000"
        },
        {
            "author_id": "ca196b52-d955-4898-a50c-5833941fceae",
            "author_name": "Rudy Biasioni",
            "timestamp": "05/12/2016",
            "comment": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
            "photo_url": "http://dummyimage.com/160x229.bmp/ff4444/ffffff"
        },
        {
            "author_id": "f60c426e-4b8b-43d3-a177-57f3e86a2f65",
            "author_name": "Elwin Redler",
            "timestamp": "11/23/2016",
            "comment": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
            "photo_url": "http://dummyimage.com/104x149.png/ff4444/ffffff"
        },
        {
            "author_id": "40034bff-1c35-4a17-b72e-6d65f9a93d8e",
            "author_name": "Felicio Baillie",
            "timestamp": "02/15/2017",
            "comment": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
            "photo_url": "http://dummyimage.com/175x232.bmp/5fa2dd/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d88",
    "name": "ParturientMontesNascetur.tiff",
    "status": "Missing",
    "due_date": "06/03/2017",
    "condition": "Excellent",
    "comments": [
        {
            "author_id": "93882637-a123-4edd-92de-109485f07d5c",
            "author_name": "Cull Feak",
            "timestamp": "02/05/2017",
            "comment": "Phasellus sit amet erat.",
            "photo_url": "http://dummyimage.com/153x117.jpg/cc0000/ffffff"
        },
        {
            "author_id": "c28b4766-d5e9-4f34-af7a-3c90c884cec8",
            "author_name": "Maryjo Radish",
            "timestamp": "02/16/2017",
            "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "photo_url": "http://dummyimage.com/119x163.png/5fa2dd/ffffff"
        },
        {
            "author_id": "e3b092ec-dbe0-4ca0-8bac-b268d6e27906",
            "author_name": "Jaquelyn Tremmil",
            "timestamp": "10/11/2016",
            "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "photo_url": "http://dummyimage.com/204x230.bmp/cc0000/ffffff"
        },
        {
            "author_id": "49555941-1392-47fe-b8af-eeae524df651",
            "author_name": "Salvador O' Finan",
            "timestamp": "03/22/2017",
            "comment": "Aliquam erat volutpat.",
            "photo_url": "http://dummyimage.com/120x117.bmp/ff4444/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d89",
    "name": "MaurisUllamcorper.mov",
    "status": "Uploaded",
    "due_date": "08/28/2017",
    "condition": "Excellent",
    "comments": [
        {
            "author_id": "5733a1c2-228f-49e5-aa2f-d340d43febea",
            "author_name": "Kamila Whiteway",
            "timestamp": "08/24/2016",
            "comment": "Nulla mollis molestie lorem.",
            "photo_url": "http://dummyimage.com/201x222.bmp/5fa2dd/ffffff"
        },
        {
            "author_id": "1998391a-413b-4827-9e72-5910a2f07695",
            "author_name": "Colette Bessom",
            "timestamp": "05/30/2016",
            "comment": "In hac habitasse platea dictumst.",
            "photo_url": "http://dummyimage.com/192x156.png/ff4444/ffffff"
        },
        {
            "author_id": "4b709d41-1261-4951-8bff-db1520647228",
            "author_name": "Winifred Jonk",
            "timestamp": "08/22/2016",
            "comment": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
            "photo_url": "http://dummyimage.com/144x151.jpg/5fa2dd/ffffff"
        },
        {
            "author_id": "ed9e5b27-c592-4bda-8eaa-1602c442e40f",
            "author_name": "Renard Yerrell",
            "timestamp": "07/21/2016",
            "comment": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "photo_url": "http://dummyimage.com/213x190.png/ff4444/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8a",
    "name": "AtNibh.xls",
    "status": "Complete",
    "due_date": "10/09/2017",
    "condition": "Reupload",
    "comments": [
        {
            "author_id": "d248c8e7-e3be-4286-9ebb-cb97869b5c83",
            "author_name": "Catlin Emnoney",
            "timestamp": "01/05/2017",
            "comment": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
            "photo_url": "http://dummyimage.com/227x143.png/5fa2dd/ffffff"
        },
        {
            "author_id": "9666b6e2-0fb7-4099-a2fe-fe3de1c2be5a",
            "author_name": "Arleyne Buddles",
            "timestamp": "08/17/2016",
            "comment": "Pellentesque at nulla.",
            "photo_url": "http://dummyimage.com/134x130.png/dddddd/000000"
        },
        {
            "author_id": "7a09f40d-95f1-4c90-9e17-7a6b353fdde4",
            "author_name": "Celesta Pannaman",
            "timestamp": "08/18/2016",
            "comment": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
            "photo_url": "http://dummyimage.com/231x114.bmp/cc0000/ffffff"
        },
        {
            "author_id": "9f698f82-144b-429c-b4a3-af8086ca6e4f",
            "author_name": "Binny Pocknoll",
            "timestamp": "10/13/2016",
            "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "photo_url": "http://dummyimage.com/158x139.jpg/5fa2dd/ffffff"
        },
        {
            "author_id": "76819872-c41d-459b-bf9f-c3bb9fa7c8fa",
            "author_name": "Daniele Tong",
            "timestamp": "03/27/2017",
            "comment": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
            "photo_url": "http://dummyimage.com/164x110.png/cc0000/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8b",
    "name": "Quis.doc",
    "status": "Complete",
    "due_date": "06/19/2017",
    "condition": "Good",
    "comments": [
        {
            "author_id": "2d7f299a-364a-4fbd-83c2-a1a31c678a01",
            "author_name": "Kip Bootland",
            "timestamp": "08/18/2016",
            "comment": "Pellentesque at nulla.",
            "photo_url": "http://dummyimage.com/203x161.bmp/ff4444/ffffff"
        },
        {
            "author_id": "143a4611-79db-4041-837d-1ab2cb6eefee",
            "author_name": "Rudd Janew",
            "timestamp": "08/25/2016",
            "comment": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
            "photo_url": "http://dummyimage.com/106x136.jpg/cc0000/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8c",
    "name": "Sed.mp3",
    "status": "Uploaded",
    "due_date": "11/28/2017",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "8b23c637-9ba6-4470-81e6-ecedc9464b32",
            "author_name": "Ardis Jeayes",
            "timestamp": "11/16/2016",
            "comment": "Morbi ut odio.",
            "photo_url": "http://dummyimage.com/200x144.jpg/cc0000/ffffff"
        },
        {
            "author_id": "a73a749f-8360-414b-a04e-bbc1613a9ca6",
            "author_name": "Tammy Kester",
            "timestamp": "06/01/2016",
            "comment": "Integer ac neque. Duis bibendum.",
            "photo_url": "http://dummyimage.com/134x119.bmp/dddddd/000000"
        },
        {
            "author_id": "9ce9781d-6c85-4df9-8355-7ef20603e08d",
            "author_name": "Ulrika Paradise",
            "timestamp": "01/28/2017",
            "comment": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
            "photo_url": "http://dummyimage.com/146x203.png/cc0000/ffffff"
        },
        {
            "author_id": "cd9f4776-c85b-4456-ab98-18ed4f88ca22",
            "author_name": "Consalve Maciejak",
            "timestamp": "11/22/2016",
            "comment": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
            "photo_url": "http://dummyimage.com/153x130.bmp/cc0000/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8d",
    "name": "AnteVelIpsum.ppt",
    "status": "Uploaded",
    "due_date": "09/22/2017",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "6ab90c9f-848d-4e7c-bb48-947f1daecc50",
            "author_name": "Gregory Foxhall",
            "timestamp": "04/26/2017",
            "comment": "Proin interdum mauris non ligula pellentesque ultrices.",
            "photo_url": "http://dummyimage.com/204x113.jpg/ff4444/ffffff"
        },
        {
            "author_id": "82d9972f-472e-444b-ab6c-95e77ced0fdd",
            "author_name": "Elisha Glasper",
            "timestamp": "06/24/2016",
            "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "photo_url": "http://dummyimage.com/161x200.bmp/cc0000/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8e",
    "name": "LectusIn.ppt",
    "status": "Processing",
    "due_date": "11/23/2017",
    "condition": "Reupload",
    "comments": [
        {
            "author_id": "a29b281b-358e-41aa-ab62-b001b0b75d9d",
            "author_name": "Frank Le Fleming",
            "timestamp": "06/16/2016",
            "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
            "photo_url": "http://dummyimage.com/130x205.bmp/dddddd/000000"
        },
        {
            "author_id": "b3479c4e-a966-47f3-afdc-f200d149857b",
            "author_name": "Madison Pridmore",
            "timestamp": "02/26/2017",
            "comment": "Morbi non quam nec dui luctus rutrum.",
            "photo_url": "http://dummyimage.com/203x198.bmp/cc0000/ffffff"
        },
        {
            "author_id": "612223b5-2255-4407-8f6b-fd2332124901",
            "author_name": "Hogan Ferfulle",
            "timestamp": "02/08/2017",
            "comment": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
            "photo_url": "http://dummyimage.com/127x165.jpg/ff4444/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d8f",
    "name": "Nunc.tiff",
    "status": "Uploaded",
    "due_date": "08/07/2017",
    "condition": "Good",
    "comments": [
        {
            "author_id": "9e0c7b18-fed0-4f56-b9b0-9360d2286ded",
            "author_name": "Bobby Hanscome",
            "timestamp": "12/05/2016",
            "comment": "Nunc purus.",
            "photo_url": "http://dummyimage.com/171x229.jpg/ff4444/ffffff"
        },
        {
            "author_id": "8da07586-8d55-4ac8-957d-acfe3a6e7f9e",
            "author_name": "Consolata Ligoe",
            "timestamp": "08/20/2016",
            "comment": "Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "photo_url": "http://dummyimage.com/176x233.bmp/5fa2dd/ffffff"
        },
        {
            "author_id": "3413ea7c-c4a6-4253-b68a-a8e0ccf47629",
            "author_name": "Tobie Delle",
            "timestamp": "04/06/2017",
            "comment": "Aliquam non mauris. Morbi non lectus.",
            "photo_url": "http://dummyimage.com/250x203.jpg/dddddd/000000"
        },
        {
            "author_id": "cf018296-fbec-4910-9396-0f75fb206474",
            "author_name": "Lainey Crawford",
            "timestamp": "11/30/2016",
            "comment": "Integer non velit.",
            "photo_url": "http://dummyimage.com/232x111.jpg/5fa2dd/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d90",
    "name": "Diam.xls",
    "status": "Complete",
    "due_date": "04/06/2018",
    "condition": "Reupload",
    "comments": [
        {
            "author_id": "bb2d202d-0162-4ac3-adda-5aec8941019e",
            "author_name": "Thom Muggleton",
            "timestamp": "03/15/2017",
            "comment": "Phasellus sit amet erat. Nulla tempus.",
            "photo_url": "http://dummyimage.com/169x154.jpg/ff4444/ffffff"
        },
        {
            "author_id": "af85da37-5bc0-4614-81c6-bb00c39e6c25",
            "author_name": "Arnoldo Towns",
            "timestamp": "09/14/2016",
            "comment": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
            "photo_url": "http://dummyimage.com/185x173.png/5fa2dd/ffffff"
        },
        {
            "author_id": "b21b08e9-43da-4cc0-b8df-98b70a21fe4d",
            "author_name": "Erin Thurman",
            "timestamp": "08/17/2016",
            "comment": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
            "photo_url": "http://dummyimage.com/102x195.bmp/cc0000/ffffff"
        },
        {
            "author_id": "7c29b0b7-cc4b-43ef-a8f4-aa080072ff9f",
            "author_name": "Hermine Haldon",
            "timestamp": "02/10/2017",
            "comment": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
            "photo_url": "http://dummyimage.com/190x125.bmp/ff4444/ffffff"
        },
        {
            "author_id": "759d406c-bf07-425c-8341-de948a6ea972",
            "author_name": "Sascha Croal",
            "timestamp": "05/20/2016",
            "comment": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "photo_url": "http://dummyimage.com/147x185.jpg/5fa2dd/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d91",
    "name": "EuismodScelerisque.mp3",
    "status": "Complete",
    "due_date": "12/05/2017",
    "condition": "Reupload",
    "comments": [
        {
            "author_id": "1c19e3bf-56e7-4ec4-b460-7d45af44b812",
            "author_name": "Ranice Narraway",
            "timestamp": "09/29/2016",
            "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "photo_url": "http://dummyimage.com/119x209.bmp/dddddd/000000"
        },
        {
            "author_id": "1ffb7894-70ca-41d4-87d6-29bd6f009e6a",
            "author_name": "Kore Adshad",
            "timestamp": "09/24/2016",
            "comment": "Nulla tellus.",
            "photo_url": "http://dummyimage.com/156x123.bmp/5fa2dd/ffffff"
        },
        {
            "author_id": "568fd4df-a480-41bd-a1ca-1bf17bb50498",
            "author_name": "Wolfie Sante",
            "timestamp": "09/28/2016",
            "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
            "photo_url": "http://dummyimage.com/227x162.jpg/cc0000/ffffff"
        },
        {
            "author_id": "615db328-9603-4690-831e-4a5ac35e971d",
            "author_name": "Tabby Messager",
            "timestamp": "06/02/2016",
            "comment": "Proin eu mi. Nulla ac enim.",
            "photo_url": "http://dummyimage.com/171x159.png/ff4444/ffffff"
        },
        {
            "author_id": "c3c0561b-a934-4ed8-84a7-76d1ec098e8c",
            "author_name": "Christalle Lentsch",
            "timestamp": "04/06/2017",
            "comment": "Sed ante. Vivamus tortor.",
            "photo_url": "http://dummyimage.com/181x161.png/5fa2dd/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d92",
    "name": "Ipsum.mpeg",
    "status": "Missing",
    "due_date": "06/15/2017",
    "condition": "Excellent",
    "comments": [
        {
            "author_id": "3677c43a-2270-4db5-8c9f-ae36f596b5b7",
            "author_name": "Wilhelm Tremblet",
            "timestamp": "11/23/2016",
            "comment": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            "photo_url": "http://dummyimage.com/157x192.bmp/5fa2dd/ffffff"
        },
        {
            "author_id": "8c3a1f2a-a4bf-467e-83ab-0dd60553d334",
            "author_name": "Guinevere Hassewell",
            "timestamp": "05/15/2016",
            "comment": "Fusce posuere felis sed lacus.",
            "photo_url": "http://dummyimage.com/110x129.bmp/dddddd/000000"
        },
        {
            "author_id": "2963111b-1964-4f42-bf20-ef51c590ac56",
            "author_name": "Gabie Rayhill",
            "timestamp": "03/22/2017",
            "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
            "photo_url": "http://dummyimage.com/156x106.jpg/ff4444/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d93",
    "name": "FacilisiCras.mp3",
    "status": "Complete",
    "due_date": "08/27/2017",
    "condition": "Good",
    "comments": [
        {
            "author_id": "caa6016a-cf2a-4a18-a1fe-8beca2d3daab",
            "author_name": "Zelda Worvell",
            "timestamp": "09/30/2016",
            "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
            "photo_url": "http://dummyimage.com/205x237.jpg/dddddd/000000"
        },
        {
            "author_id": "eb75667e-0dbf-4df6-ba97-d9260d631f8d",
            "author_name": "Archambault Strathe",
            "timestamp": "01/11/2017",
            "comment": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
            "photo_url": "http://dummyimage.com/214x225.jpg/cc0000/ffffff"
        },
        {
            "author_id": "322c12f9-c4ad-4062-88ef-335a234342d9",
            "author_name": "Sisely D'Abbot-Doyle",
            "timestamp": "03/24/2017",
            "comment": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "photo_url": "http://dummyimage.com/109x149.bmp/cc0000/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d94",
    "name": "Lectus.mp3",
    "status": "Missing",
    "due_date": "11/01/2017",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "17cabb2f-31ab-47e0-a8ca-ba105e640421",
            "author_name": "Alejandrina O' Ronan",
            "timestamp": "10/11/2016",
            "comment": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
            "photo_url": "http://dummyimage.com/248x156.png/ff4444/ffffff"
        },
        {
            "author_id": "0d98e970-c002-420e-ab09-655adced9a43",
            "author_name": "Zaria Gaine",
            "timestamp": "03/28/2017",
            "comment": "Duis consequat dui nec nisi volutpat eleifend.",
            "photo_url": "http://dummyimage.com/155x203.png/dddddd/000000"
        },
        {
            "author_id": "bfdd627e-5b75-4017-b008-de8418beaa4e",
            "author_name": "Anabal East",
            "timestamp": "06/06/2016",
            "comment": "Etiam justo. Etiam pretium iaculis justo.",
            "photo_url": "http://dummyimage.com/127x245.png/dddddd/000000"
        },
        {
            "author_id": "cf18d2cb-cb2e-438e-85e2-59d0027abb86",
            "author_name": "Windham Andrault",
            "timestamp": "01/06/2017",
            "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
            "photo_url": "http://dummyimage.com/231x117.bmp/dddddd/000000"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d95",
    "name": "DuisAliquamConvallis.mp3",
    "status": "Uploaded",
    "due_date": "04/23/2018",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "91850969-e2ba-48f0-90f2-00f516c0f662",
            "author_name": "Dionisio Songust",
            "timestamp": "03/25/2017",
            "comment": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
            "photo_url": "http://dummyimage.com/167x144.jpg/ff4444/ffffff"
        },
        {
            "author_id": "15d54b14-8189-43ab-9995-7af5ba8d92de",
            "author_name": "Allan Goring",
            "timestamp": "10/29/2016",
            "comment": "Integer a nibh. In quis justo.",
            "photo_url": "http://dummyimage.com/207x228.png/5fa2dd/ffffff"
        },
        {
            "author_id": "39a3c770-fa4a-4214-853c-d4af0dc9a9bf",
            "author_name": "Cathrin Shields",
            "timestamp": "01/15/2017",
            "comment": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
            "photo_url": "http://dummyimage.com/220x191.bmp/5fa2dd/ffffff"
        },
        {
            "author_id": "2123c054-c5ae-4bcc-b84f-9e3c76fd35f6",
            "author_name": "Robinet Shilling",
            "timestamp": "01/22/2017",
            "comment": "Maecenas pulvinar lobortis est.",
            "photo_url": "http://dummyimage.com/235x188.jpg/ff4444/ffffff"
        },
        {
            "author_id": "63599c26-079a-42ab-b107-decde6e18a94",
            "author_name": "Karita Perkin",
            "timestamp": "01/13/2017",
            "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
            "photo_url": "http://dummyimage.com/189x134.png/5fa2dd/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d96",
    "name": "InEst.mp3",
    "status": "Missing",
    "due_date": "11/18/2017",
    "condition": "Reupload",
    "comments": [
        {
            "author_id": "390daeb2-fabd-4fa6-9a9a-e547f6f44916",
            "author_name": "Izabel Clemitt",
            "timestamp": "02/11/2017",
            "comment": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
            "photo_url": "http://dummyimage.com/206x249.png/cc0000/ffffff"
        },
        {
            "author_id": "947189bf-1c88-4777-be56-bedc77ade1b6",
            "author_name": "Marion Bainbridge",
            "timestamp": "06/17/2016",
            "comment": "Ut at dolor quis odio consequat varius.",
            "photo_url": "http://dummyimage.com/210x203.png/5fa2dd/ffffff"
        },
        {
            "author_id": "4cf3ed0e-6ec1-44ae-aa35-24aa5da04243",
            "author_name": "Emily Mainston",
            "timestamp": "03/21/2017",
            "comment": "Proin at turpis a pede posuere nonummy. Integer non velit.",
            "photo_url": "http://dummyimage.com/247x105.jpg/ff4444/ffffff"
        },
        {
            "author_id": "1eabf715-24cf-4904-8862-bd81c16db29c",
            "author_name": "Carmina Manwaring",
            "timestamp": "12/04/2016",
            "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "photo_url": "http://dummyimage.com/109x215.jpg/5fa2dd/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d97",
    "name": "SitAmetTurpis.avi",
    "status": "Processing",
    "due_date": "06/18/2017",
    "condition": "Excellent",
    "comments": [
        {
            "author_id": "450de026-9c63-4ff9-9f8f-838cb6d75fb7",
            "author_name": "Levy Lillecrap",
            "timestamp": "02/16/2017",
            "comment": "Suspendisse potenti.",
            "photo_url": "http://dummyimage.com/155x137.jpg/dddddd/000000"
        },
        {
            "author_id": "fa350479-b51b-47da-9e9a-47c00fad8870",
            "author_name": "Meredith Margrett",
            "timestamp": "01/28/2017",
            "comment": "Maecenas rhoncus aliquam lacus.",
            "photo_url": "http://dummyimage.com/114x220.bmp/ff4444/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d98",
    "name": "NullaSedAccumsan.tiff",
    "status": "Uploaded",
    "due_date": "08/16/2017",
    "condition": "Excellent",
    "comments": [
        {
            "author_id": "ab74c595-5ef3-4647-b0a2-645893107367",
            "author_name": "Lora Ridehalgh",
            "timestamp": "08/15/2016",
            "comment": "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "photo_url": "http://dummyimage.com/109x189.jpg/5fa2dd/ffffff"
        },
        {
            "author_id": "1cb4722c-9d63-44d8-a99c-b4e496c23d24",
            "author_name": "Ruprecht Biner",
            "timestamp": "06/11/2016",
            "comment": "Etiam vel augue.",
            "photo_url": "http://dummyimage.com/152x143.bmp/dddddd/000000"
        },
        {
            "author_id": "df9d4c80-fb37-43fd-b151-8af763e4dbac",
            "author_name": "Lisabeth Losel",
            "timestamp": "05/23/2016",
            "comment": "Phasellus id sapien in sapien iaculis congue.",
            "photo_url": "http://dummyimage.com/100x119.png/dddddd/000000"
        },
        {
            "author_id": "53271907-efee-42f4-b629-290c45a4eab8",
            "author_name": "Brnaba Bleakley",
            "timestamp": "07/27/2016",
            "comment": "Pellentesque at nulla. Suspendisse potenti.",
            "photo_url": "http://dummyimage.com/121x173.bmp/cc0000/ffffff"
        },
        {
            "author_id": "ec9a557f-1d26-4b70-acc0-f09c5ba5bd32",
            "author_name": "Lyndell Gowing",
            "timestamp": "11/19/2016",
            "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
            "photo_url": "http://dummyimage.com/111x134.jpg/5fa2dd/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d99",
    "name": "Sit.mpeg",
    "status": "Uploaded",
    "due_date": "02/07/2018",
    "condition": "Excellent",
    "comments": [
        {
            "author_id": "1334ee7f-5e4e-453e-a084-faaeb4e3db3b",
            "author_name": "Bambi Okell",
            "timestamp": "11/17/2016",
            "comment": "Nullam porttitor lacus at turpis.",
            "photo_url": "http://dummyimage.com/141x209.jpg/ff4444/ffffff"
        },
        {
            "author_id": "f2480bed-201b-458c-9fe7-b9d6c9897b56",
            "author_name": "Goldy Stovin",
            "timestamp": "10/22/2016",
            "comment": "Morbi a ipsum. Integer a nibh. In quis justo.",
            "photo_url": "http://dummyimage.com/128x198.bmp/cc0000/ffffff"
        },
        {
            "author_id": "67dd8977-3ef3-4a8a-8461-3884d2b0e235",
            "author_name": "Fred Jencken",
            "timestamp": "01/12/2017",
            "comment": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
            "photo_url": "http://dummyimage.com/103x152.png/cc0000/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d9a",
    "name": "AmetEleifend.xls",
    "status": "Complete",
    "due_date": "11/16/2017",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "590a81a3-4d87-4998-bdb4-7acee7ec7edb",
            "author_name": "Julee Greenstead",
            "timestamp": "05/16/2016",
            "comment": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
            "photo_url": "http://dummyimage.com/167x243.png/ff4444/ffffff"
        },
        {
            "author_id": "e4f20b79-a697-4097-b20f-302a9cdb8fd4",
            "author_name": "Joya McElory",
            "timestamp": "08/31/2016",
            "comment": "Sed ante. Vivamus tortor.",
            "photo_url": "http://dummyimage.com/227x132.jpg/ff4444/ffffff"
        },
        {
            "author_id": "4c58d5ec-5e57-442e-a89c-daf99f13365a",
            "author_name": "Eolanda Wolfit",
            "timestamp": "03/31/2017",
            "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
            "photo_url": "http://dummyimage.com/206x228.jpg/ff4444/ffffff"
        },
        {
            "author_id": "2b2dc060-3165-4ccb-b97b-bf1b9cf56107",
            "author_name": "Kathi McLise",
            "timestamp": "01/03/2017",
            "comment": "Phasellus in felis.",
            "photo_url": "http://dummyimage.com/129x223.jpg/5fa2dd/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d9b",
    "name": "MusVivamusVestibulum.mov",
    "status": "Uploaded",
    "due_date": "04/22/2018",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "f25e7bdd-188b-46bd-a1a4-c50e547912b3",
            "author_name": "Jaclin Pratley",
            "timestamp": "10/27/2016",
            "comment": "Duis at velit eu est congue elementum.",
            "photo_url": "http://dummyimage.com/214x201.jpg/5fa2dd/ffffff"
        },
        {
            "author_id": "765961a6-3f04-472f-86cd-a1bfb9e5a728",
            "author_name": "Oates Rawlingson",
            "timestamp": "07/02/2016",
            "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "photo_url": "http://dummyimage.com/184x115.jpg/cc0000/ffffff"
        },
        {
            "author_id": "3d02ccc8-476e-4089-944b-26e3b0118a28",
            "author_name": "Ambrosio Rosle",
            "timestamp": "12/26/2016",
            "comment": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            "photo_url": "http://dummyimage.com/113x189.bmp/5fa2dd/ffffff"
        },
        {
            "author_id": "e199496b-758c-4d18-9a91-daf052345b4d",
            "author_name": "Deeanne Erington",
            "timestamp": "04/23/2017",
            "comment": "Pellentesque eget nunc.",
            "photo_url": "http://dummyimage.com/147x141.bmp/cc0000/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d9c",
    "name": "Duis.xls",
    "status": "Uploaded",
    "due_date": "03/07/2018",
    "condition": "Good",
    "comments": [
        {
            "author_id": "35b00e4a-6489-46d3-b455-bc4bffd6e999",
            "author_name": "Teddy Baggiani",
            "timestamp": "12/13/2016",
            "comment": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
            "photo_url": "http://dummyimage.com/178x245.png/ff4444/ffffff"
        },
        {
            "author_id": "9239492f-f11d-4f48-9f07-02f5b75ac896",
            "author_name": "Ardath Civitillo",
            "timestamp": "12/08/2016",
            "comment": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
            "photo_url": "http://dummyimage.com/170x202.png/5fa2dd/ffffff"
        },
        {
            "author_id": "3cc42f0a-1707-4784-b3af-2dc3b741e05d",
            "author_name": "Ruttger Feares",
            "timestamp": "05/10/2017",
            "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
            "photo_url": "http://dummyimage.com/120x204.png/dddddd/000000"
        },
        {
            "author_id": "e0ad582f-f116-454b-a716-b5a61b1f8ecd",
            "author_name": "Ethe Furniss",
            "timestamp": "10/15/2016",
            "comment": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
            "photo_url": "http://dummyimage.com/176x187.png/5fa2dd/ffffff"
        }
    ]
}, {
    "uuid": "58a6cc42fc13ae6e2b000d9d",
    "name": "InFaucibus.xls",
    "status": "Uploaded",
    "due_date": "12/28/2017",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "21413401-9d4a-4d47-b390-7628a6dfb8ac",
            "author_name": "Emmit Stooders",
            "timestamp": "05/28/2016",
            "comment": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
            "photo_url": "http://dummyimage.com/214x249.png/cc0000/ffffff"
        },
        {
            "author_id": "ad482025-18a4-4585-a41d-788dd2a87db0",
            "author_name": "Zak Warke",
            "timestamp": "12/01/2016",
            "comment": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
            "photo_url": "http://dummyimage.com/221x240.jpg/5fa2dd/ffffff"
        },
        {
            "author_id": "58b650b4-19d3-4161-a483-eaa8138f157b",
            "author_name": "Antin Higgen",
            "timestamp": "02/04/2017",
            "comment": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
            "photo_url": "http://dummyimage.com/247x110.jpg/cc0000/ffffff"
        },
        {
            "author_id": "46244f78-4e12-4487-834c-80c68831a2fa",
            "author_name": "Clem Cohani",
            "timestamp": "05/24/2016",
            "comment": "Fusce consequat. Nulla nisl. Nunc nisl.",
            "photo_url": "http://dummyimage.com/230x131.bmp/dddddd/000000"
        }
    ]
}, {
    "uuid": "1ea99f93-7f66-4a83-93c2-e813e3cff75f",
    "name": "Aliquet.ppt",
    "status": "Processing",
    "due_date": "07/04/2017",
    "condition": "Poor",
    "comments": [
        {
            "author_id": "fe9538a2-5e70-4468-9ef9-d59c6afa689d",
            "author_name": "Liva Fant",
            "timestamp": "11/30/2016",
            "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            "photo_url": "http://dummyimage.com/219x172.jpg/dddddd/000000"
        },
        {
            "author_id": "40a87d51-df5b-4809-8efd-8fc23532f7f1",
            "author_name": "Tresa Danneil",
            "timestamp": "11/20/2016",
            "comment": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "photo_url": "http://dummyimage.com/110x165.bmp/dddddd/000000"
        },
        {
            "author_id": "cd187010-6dbc-482e-9aad-e8d31a534812",
            "author_name": "Wilburt Worboys",
            "timestamp": "08/03/2016",
            "comment": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
            "photo_url": "http://dummyimage.com/186x181.png/ff4444/ffffff"
        }
    ]
}]
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

