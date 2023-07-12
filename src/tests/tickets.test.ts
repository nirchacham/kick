// import axios, { AxiosResponse } from 'axios';
import TicketsResponse from '../responses/tickets.response';
import TicketsHandler from '../handlers/tickets.handler';
import data from '../public/data.json'

describe('TicketsHandler', () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  describe('getAllTickets', () => {
    it('should return an empty response if there are no tickets', async () => {
      const expectedResponse = new TicketsResponse(200, []);
      const response = await TicketsHandler.getAllTickets('testestest');
      expect(response).toEqual(expectedResponse);
    });

    it('should return an array that matches the filter in (title,content,userEmail)', async () => {
      const mockData = [
        {
            "id": "b52ad1dc-937b-54c3-81e9-2d433dd96bf6",
            "title": "setting up my login page profile",
            "content": "Hi there!\n\nI just want to ask how to fix my problem regarding on my login page.\n\nI watched and followed a tutorial on how to make database and a login page, here's what I have done following the tutorial, I did not mean to say it is wrong but I think I lack of something that I cannot decode on myself and I have a hard time looking since I am not sure what it is.\n\nHere is what I did:\n\n* Database collection\n* A pagecontent where there is:\n\nFirst Name\nLast Name\nEmail\nUpload Profile\nAbout Me\n\nThis page is connected to my database which I did right\n\n* I made a dynamic page wherein it will show the content that I will write from the page content I mentioned above. If I will not write information on that page content, my dynamic page will be blank.\n\nAfter I created a database, a page and a dynamic page, I, then created the login/logout page using codes.\n\nMy concern is this, once I click on my profile, instead of going to my dynamic page, it should be on my page content. Once I put information on that page, then it will show my dynamic page.\nHow can I, or what should I do with that?\n\nThank you for the answers.\n",
            "userEmail": "cube@zo.lv",
            "creationTime": 1523581514366,
            "labels": [
                "Login",
                "Problem",
                "Tutorial"
            ]
        },
        {
            "id": "4a8e9c43-4acb-5e3b-b045-b5beb57f9e10",
            "title": "Invoke a delete confirmation lightbox from another lightbox",
            "content": "I have a lightbox that queries a collection and populates a table which is linked to a dataset. When a user selects a row in the table, I want to open a second lightbox \"Delete Verification\" asking the user to confirm deleting the item.  The user selects either a Yes button or a No button which closes the \"Delete Verification\" lightbox and sets a data variable called \"confirmed\" to a value of either \"yes\" or \"no\". \nThen, the first lightbox checks this return value and if \"yes\" it calls the dataset1.remove function.\n\nThe problem is the \"Delete Verification\" lightbox does not open. Here is the pertinent code.  Note: the \"Delete Verification\" lightbox is called from several pages and it works fine. It just doesn't open when called from this particular lightbox.\n\nexport function table1_rowSelect(event) {\n //delete the selected row\n let tableRowIndex = event.rowIndex;\n    console.log(\"tableRowIndex = \" + tableRowIndex); // 2 if the third row selected\n \n //ask user to confirm before deleting the item\n    $w(\"#dataset1\").setCurrentItemIndex(tableRowIndex) // sets the dataset rowIndex\n      .then( () => {\n        console.log(\"open the lightbox asking user to confirm deletion\");\n        (wixWindow.lightbox.open(\"Delete Verification\"))  //########## THIS LIGHTBOX DOES NOT OPEN #########\n             .then( (data) => {\n let userAction = data.confirmed;\n                 console.log(\"userAction = \" + userAction);\n if (userAction === \"yes\") {\n                    $w(\"#dataset1\").remove();\n                }\n             })\n \n      } );\n}\n\n",
            "userEmail": "di@modude.mc",
            "creationTime": 1543815282858
        },
        {
            "id": "dea10b2a-6cd3-5aea-bcd0-5ba478753740",
            "title": "Using InsertReference() for following functionality .weird error, field error?!",
            "content": "okay so essentially I want to add my current user that is logged into a multi reference field of another user once they press a follow button on that users profile.\n\nSo if I want to follow your account, I am trying to use insertReference() to insert a reference of my profile item into the followers field in your item. \n\nHere's my current code.\n\n I iterate through each item in the repeater and set its individual components to build the individual users \"mini profile\"\n\nitemdata refers to the current item.\n\n$w(\"#repeater2\").forEachItem(($item, itemData, index) => {//repeating user\n \n let belt = itemData.belt;\n\n let a=\"  | | | |  \";\n if (itemData.stripe===\"0\"){     a=\"`````````\";}\n else if (itemData.stripe===\"1\"){a=\"`|```````\";}\n else if (itemData.stripe===\"2\"){a=\"`| |`````\";}\n else if (itemData.stripe===\"3\"){a=\"`| | |```\";}\n else if (itemData.stripe===\"4\"){a=\"`| | | |`\";}\n\nhere i'm setting their profile up. nothing special\n            $item('#repeatedName').text=itemData.name;\n            $item('#repeatedProfilePic').src=itemData.photoProfile;\n            $item('#repeatedContainer').src=itemData.photoCover;\n            $item('#repeatedBoxBelt').style.backgroundColor = session.getItem(belt);\n            $item('#repeatedStripes').text = a;\n \n            $item('#repeatedFollowButton').onClick((event)=>{\nwhen the button is pressed i call the following function which i have created and i pass in the current profiles itemData\n                followUser(itemData);\n            });\n        });\n\n\nexport function followUser(itemData){\n //must add current user(logged in user) to selected users followers\n //inserts a reference to the item with ID of the current user in the followers field of the item in the USER_ProfileData collection with the ID of the selected user(the one the current user wants to follow).\n\n    wixData.insertReference(\"USER_ProfileData\", \"followers\", itemData._id, wixUsers.currentUser.id)\n    .then( () => {\n        console.log(\">Reference inserted \");\n    } )\n    .catch( (error) => {\n\n        console.log(error);\n    } );\n}\n\nWhen I press the follow button I am getting the following printed to the console.\n\n Error: Provided relationshipAttribute [followers] is not a multi-reference field. \nThe field is in fact a multi reference field...\n\njust in case you want to look around. HERES THE LINK!\nwww.grapplehub.net\n\nTHIS PROBLEM HAS BEEN BUGGING ME FOR A LONG TIME!! ANY ADVICE IS VERY MUCH APPRECIATED!\n\n\n",
            "userEmail": "kuebemic@ufvewed.gi",
            "creationTime": 1538861834942
        },
        {
            "id": "fb09f153-aafd-5e8a-8062-0a2a1a92772c",
            "title": "https://healthcircle365.com/iron-core-edge/",
            "content": " Iron Core Edge  By no means snort at his makes an attempt to make you completely happy, don't shaggy dog story with male capabilities and sizes - this is essentially Iron Core Edge most painful situation for Iron Core Edge fundamental ideas of riskless sex. Who argues that his physiognomy at Iron Core Edge time of Iron Core Edge seek for that very cherished point or in an try to unbutton a bra explanations you to have probably Iron Core Edge most tender feelings? Don't make fun of your ex! It most effective appears that this passion should be flattered, but actually he will think that at some factor he'll also grow to be an “ex”, after which you're going to snigger at him in Iron Core Edge same method. And, oddly enough, you will have to not snigger immediately, even if you remembered whatever very humorous. It is not likely that you will prove Iron Core Edge MCH that didn't snigger at him, but for those who prove it, he will still be very offended! In any case, alternatively of having fun with what is going down, you believe of some thing wholly one of a kind. Probably Iron Core Edge most passionate fish there's a style of decorative fish, often called \"kissing gourami.\" At these voluptuous individuals Iron Core Edge kiss can last Iron Core Edge entire 25 minutes! Essentially Iron Core Edge most indecent library Iron Core Edge older new release could resent Iron Core Edge contents of Iron Core Edge shelves of bookstores, but they are unlikely to grasp that essentially Iron Core Edge most vast collection of books about intercourse is contained in Iron Core Edge Vatican library. Iron Core Edge gathering has 25,000 volumes. Iron Core Edge strangest bride in some parts of South India is still preserved custom prohibiting Iron Core Edge younger brother to marry earlier than Iron Core Edge older. For this reason Iron Core Edge tradition that deceives this tradition has been preserved: to solemnly mix Iron Core Edge wedding of an elder brother with a tree (or with Iron Core Edge spirit residing within Iron Core Edge tree). Probably Iron Core Edge most ridiculous contraception An absolute document holder in phrases of extravagant approaches of contraception may also be viewed Iron Core Edge Greek health care provider Soran.  \n https://healthcircle365.com/iron-core-edge/ ",
            "userEmail": "imguhiz@milzi.tf",
            "creationTime": 1545399819648
        },
        {
            "id": "f713c784-0783-5160-a8e4-9b8f299462d5",
            "title": "Failed to load initial data Error: {\"message\":\"value Some(150) for paging.limit is not valid\",\"details\":{}}\n",
            "content": "Suddenly getting this error pop up when changing the dataset number to display setting.\n Failed to load initial data Error: {\"message\":\"value Some(150) for paging.limit is not valid\",\"details\":{}}\n It is for a custom product collection repeater. \n Have tried to adjust the number of items to display in the dataset settings but it only works for under 100 products. Any ideas if it can work for more than 100?",
            "userEmail": "apuoh@di.tg",
            "creationTime": 1523703671573
        },
        {
            "id": "75a31709-7cfe-5070-9685-0fb79cb85ee2",
            "title": "Count number of record in a collection",
            "content": "Please I need help counting the number of a record in a collection and displaying the number of time occurred, in a text fiel, here is my code, but not working\n \n wixData.query(\"#dataset1\")\n  .count()\n  .then( (num) => {\n let numberOfItems = num;\n  $w('#txtRegcourse').text = numberOfItems;\n  } )\n  .catch( (error) => {\n let errorMsg = error.message;\n let code = error.code;\n  } );",
            "userEmail": "tuvopki@kedegil.pt",
            "creationTime": 1539467032564
        },
        {
            "id": "251e1969-93f1-5a8b-9561-18255f464bf2",
            "title": "Question about record locking and one user overriding another’s data",
            "content": "\nI have an application that allows end users to click in a table row to select it and assign or unassign themselves to two text fields. Everything works perfectly. However, If two people do this function at the same time, one overrides the other’s changes. Here’s the processing…\nThe table looks something like this:\n  \nUser 1           User 2        Date                Start       End\n \n<Available> Joe Blow       mm/dd/yyyyy hh:mm hh:mm...\n \n<Available> <Available>    mm/dd/yyyyy hh:mm hh:mm...,\n \n…\n[Save ]\n\nA user clicks on a row, say row 1 above to assign himself to the <available> cell in the first row. The code inserts the current user’s name in the User 1 column in row 1 and then writes the row back to the collection using this code:\n\nlet rowData = {\n_id: row_id,\ntitle: rowtitle,\nuser1: rowuser1,\nuser2: rowuser2, \n…\n};\n$w(\"#table1\").updateRow(workrow, rowData);\nwixData.save(\"Schedule\", rowData) // update the row in the underlying collection\n.then((results) => {\nlet item = results; //see item below \n$w(\"#text30\").text = message + \"on \" + rowdate \n})   // Error \n.catch((err) => {\nlet errorMsg = err;\n$w(\"#text30\").text = (\"update error: \" + errorMsg)\nconsole.log(\"save filed: \" + errorMsg)\n});\n\nIf a user selects a row, Presses “Save” his name replaces User 1. If at the same time, another user is looking at that same row and sees it is <available>, after selecting it, his name overwrites the other user’s name when he presses save.\n\nQuestion: Should Wix use the record’s underling update time to sense that user 1 changed the row before user 2 tries to change the same row, knowing that the update  has been changed prior to user 2 pressing “Save”, thus raising an error condition indicating that “another user has changed this same record” or something like that.\n\nOr do you have to code your own record locking strategy? Please advise. Obviously, having to code a concurrent update strategy to manage changes to the underlying database adds orders of complexity to the coding.  It would seem that the updateRow action should manage the timestamps and trigger an error if the row's timestamps changes between updates.  Thanks.",
            "userEmail": "tij@zomowpi.sy",
            "creationTime": 1544034645035
        },
        {
            "id": "2c2f5033-5801-5045-b8da-aed81f2bd790",
            "title": "'loginEmail' value to pass to 2nd DB",
            "content": "I have a members area on my site which people can create an account via the standard username/password which gets saved in the Wix CRM (PrivateMembersData collection). After they click submit to create the account, it automatically takes them to another page which has form fields connected to my 2nd database which are used to create their dynamic profile page. The 2nd database has a reference field which points back to the 'loginEmail' column of the PrivateMembersData collection. \n\nThe problem I'm having is that when the member fills out the form (2nd database), all their data gets saved correctly, but the reference field ('loginEmail') is left blank. Unless I manually go in and set it via the Wix Live Database manager. [SCREENSHOT BELOW]\n\nHow can I have the users' loginEmails get automatically passed to the 2nd database so that I don't have to do this manually?\n\nBecause if a user logs out and logs back in, they're unable to see their data as the connection from PrivateMembersData and the 2nd database is broken, when this field is blank for their row.\n\nThanks in advance!\n\n \n",
            "userEmail": "wu@bomisva.bm",
            "creationTime": 1539011605825
        },
        {
            "id": "8050ca4f-6a6c-5f50-a0ed-11887d658f2f",
            "title": "how to filter a table according to the current user",
            "content": "I would like to show only a few document releases according to the user you are accessing.\nFor example: Each user must have private access to a database documents through a table.\nHow do I collect current user information (email for example) and use it as an intruction for filtering?\n\n\n \n",
            "userEmail": "aci@sulbamsun.mr",
            "creationTime": 1515422235407
        },
        {
            "id": "1cb2187a-4a4d-59c1-b271-4e9a0e6cd763",
            "title": "How secure is wix-data in the front end?",
            "content": "I have a data repeater which shows some of the fields of a dataset. Each object in the dataset also contains fields which I would rather not share openly. (To be specific, I am showing driver profiles with first name only, but the data collection contains last name and contact information as well, and I don't want people to access this).\n\nIn the page code, I made some custom filters which respond to user input. \nCan someone access the full contents of the dataset through their browser developer tools? If so, how can I prevent it?\n\nEDIT: Right after writing this I tried and realised how easy it is to access all the info. So I'll refer to my second question again. How can I prevent it?",
            "userEmail": "gedekug@utenef.nz",
            "creationTime": 1532966785381
        },
        {
            "id": "e3cc65f2-36dd-56c6-9e8b-b9eae381c34c",
            "title": "Google Maps Single Location Publish Issue",
            "content": "Hello, I am creating a page with a dropdown to filter to a specific database item for a google map (and other info). Everything works great in preview...the map updates to a new location based on the dropdown value. In the published version, the map doesn't change locations when the dropdown selection changes. All the other items...address, image, etc...work fine in preview and publish.\n\nI know issues that pop up in publish but not preview are usually related to permissions, but the dataset loaded on the page is set to read-write, and the collection is set so anyone can make changes.\n\n \n\n\n//individual facilities code below\nlet selectedLongitude = \"\";\nlet selectedLatitude = \"\";\nexport function facilityDropdown_change(event, $w) {\n    $w(\"#facilitiesdata\").onCurrentIndexChanged((index) => {\n        let itemObj = $w(\"#facilitiesdata\").getCurrentItem();\n        selectedLongitude = itemObj.longitude;\n        selectedLatitude = itemObj.latitude;\n        console.log(selectedLatitude)\n        $w(\"#googleMaps1\").location = {\n \"latitude\": selectedLongitude,\n \"longitude\": selectedLatitude,\n        };\n    })\n}\nHelp!\n\n",
            "userEmail": "ecmope@de.bo",
            "creationTime": 1525836233894
        },
        {
            "id": "407e5a76-ef18-5754-b0b5-197d0d84786c",
            "title": "Where are Next/Previous arrows? (page Not dynamic)",
            "content": " Hello! I am trying to put together a simple art portfolio site for my daughter. I have four tabs, Paintings, Drawings, Photography, 3D, each of which is a main page with a bunch of thumbnails. When you click on a thumbnail, it takes you to a subpage with a full size image of that drawing. I cannot figure out how to move from one full size image to the next without having to return to the main page with thumbnails:((. I am using the Graphic Illustrator template from the Portfolios collection, and in that template, there are actually Previous and Next arrows on those subpages. But on each subpage, each arrow is an actual link to the next or previous page. That means that if I later add/remove images in the thumbnail gallery, that Next arrow's link is going to take the viewer to a wrong (old) image. There has to be a more advanced way than manually rewriting all those links! When I go to the Add menu in the Editor, I can add a button (btw, the Button menu does Not have arrows), but I am not prompted to choose an Action for it, it's just am image, to which I can manually attach a link:(. The Wix support person told me yesterday that if I just put the arrow there, it will automatically \"know\" where to point. And of course, if I copy/paste an arrow from the template, it does not know anything, it just brings the old link with it, and points to a random wrong page. I need to find a button with an arrow image on it, which, when put on a subpage, would generate a link to the Next/Previous subpage. Where does that functionality come from?? Thank you.",
            "userEmail": "wirifuba@uwru.er",
            "creationTime": 1515739687355
        },
        {
            "id": "89398e76-823d-58d9-943e-82c12b9f2e8f",
            "title": "Help with Fetch & Json",
            "content": "My apologies in advance for what is likely a basic question. Fetch and Json are new to be, as is the Corvid development environment. I am working to send JSON login information to another server via a fetch post. I have a short function (below) to do that. It calls another function that builds an array of login credentials it retrieves from a collection. I have verified that the login credentials are returned correction. No errors are reported in the debugger from this code.\n\nHow do I get at the response from the server? Nothing I have tried seems to work. Below is my current attempt.\n\nexport async function TestCode(event) {\n let loginarray = await getLoginCredentials();\n    console.log(loginarray); // I have verified login credtials coming back correctly.\n let url = [the url I am posting to];\n\n await fetch(url, {\n      method: 'post', data: JSON.stringify({\n      loginarray\n      })\n    .then((response) => {\n \n let txt = response.statusText;\n        console.log(\"Response : \" + txt); // nothing gets to the log from here no errors in debugging\n    }\n    )\n}\n\n  )\n}",
            "userEmail": "nuhdiwodu@rig.cn",
            "creationTime": 1522202817835
        },
        {
            "id": "88b686af-71ee-5b96-b7d5-527536b8895f",
            "title": "Debugging scheduled jobs in corvid?",
            "content": "Is there a way to debug scheduled jobs in Corvid?\n\nI have created a jobs.config according to the guidelines. I have tested the function I am calling and it works as expected when run manually. However, I cannot seem to get the function to run based on the schedule.\n\nThings I have  tried:\n1. I have the \"Site Monitoring\" open over periods of time when the jobs should run. No logs for scheduled events.\n2. I have created a new collection called \"Scheduled Jobs\" which I write to at the beginning and the end of the scheduled job function I call. No updates to this table when called via schedule, but works when called manually.\n\nQuestions that may help me debug further:\n1. What permission level is a scheduled job given? (Although I do have all collection writes as \"SuppressAuth\", but the module itself is restricted to \"Admin\")\n2. Does jobs.config allow comments or do I need to delete all of those (i.e., is this pure json)? Sample file had some comments throughout and no errors in the wix editor with comments.\n\nAre there any other ways to see errors from the scheduled jobs in order to help me isolate the problem?\n\nExample entry in my jobs.config file:\n// -- 9 AM --     \n{  \n\"functionLocation\": \"updateRegistrations.updateLaRegistrations\",  \"description\": \"9am Get latest registrations\", \n\"executionConfig\": {  \n    \"time\": \"13:00\" // mandatory, “hh:mm” format\n }     \n},\n",
            "userEmail": "rigusne@doha.ir",
            "creationTime": 1541434113855
        },
        {
            "id": "c65e6c90-6eb7-57da-bc6b-a98c9d6cefd2",
            "title": "Custom 404 not working for dynamic page",
            "content": "I recently created a dynamic page that lists categories from a Data Collection I created. I added a filter to this collection that works as expected.  However, what is not working is when a value that does not meet the criteria of the filter is encountered, the page does not direct to the custom 404 I created. The custom 404 does in fact work for just junk urls, but not the dynamic page. \n\nThanks for any advice!",
            "userEmail": "zuguzni@epokewi.fk",
            "creationTime": 1542011637558
        },
        {
            "id": "368ff0ad-9dd9-5b22-8f2b-760fd1ac38df",
            "title": "TIP about getting date ranges",
            "content": "Hey\nJust wanted to share some functions I made for getting first and last days of a month and also monday and sunday of a week. Just send any date to the functions and they will return dates for you.\nfunction getFirstDay(d){ // Returns date of first day in month\n\tvar dt = new Date(d);\n\treturn new Date(dt.getFullYear(), dt.getMonth(), 1);\n}\nfunction getLastDay(d){ // Returns date of last day in month\n\tvar dt = new Date(d);\n\treturn new Date(dt.getFullYear(), dt.getMonth() + 1, 0);\n}\nfunction getMonday(d) { // Returns date of monday in the week of date you send to the function\n  d = new Date(d);\n  var day = d.getDay(),\n      diff = d.getDate() - day + (day === 0 ? -7 : 0);\n  return new Date(d.setDate(diff));\n}\n\nfunction getSunday(d) { // Returns date of sunday in the week of date you send to the function\n  d = new Date(d);\n  var day = d.getDay()-7,\n      diff = d.getDate() - day;\n  return new Date(d.setDate(diff));\n}\nThey are nice to have when you have to calculate range in dates before making a data collection query.",
            "userEmail": "penubos@uwup.sn",
            "creationTime": 1537188608714
        },
        {
            "id": "5d4c176e-9dce-5a2d-ba60-39cd5c420929",
            "title": "Chart that displays content of a table",
            "content": "Hi Wix Experts \n\nCan you please suggest a code example for creating a dynamic chart based on table data from collection?\nFor example - lest say that i have a table in my page that is connected to a collection, and that table has a filter that eventually presents 10 rows and few columns with data.\ni want those 10 items values (from a relevant column) to show in a \"dynamic\" line chart.\n\nThanks,\nRoy\n",
            "userEmail": "sacofis@ceanofe.pe",
            "creationTime": 1539318894644
        },
        {
            "id": "e3915dcf-fb6a-55dd-89b9-6b995e803e4f",
            "title": "after/beforeInsert hook not available ",
            "content": "I'm trying to build a beforeInsert hook on a data collection of permission type \"Custom Use\", however, it seems as if this lifecycle hook is not available on this permissions type. I have all of the other lifecycle hooks available, just not this one. \n\nIs there anyway to have this hook type available for these data collections?",
            "userEmail": "ducpepog@lipdapiwe.tk",
            "creationTime": 1529076014646
        },
        {
            "id": "4ab440ce-19a4-50be-a1a9-f1dbfe1372bd",
            "title": "Dynamic pages link not working...Please help",
            "content": "Hello everyone.\nIf some one can help me please, I'm really frustrated with this problem, I tried all bit and pieces but nothing work out, if any one of you can help me will be deeply appreciated.\n\nThis is regarding the dynamic page link not working in live environment.\nId values in sandbox /Live collection mode is not matching with the id values showing in the URL of live environment and hence the result is \"404 - Page not found\"\nI have sync with Live data, Publish the Live date in collection databases , but all this doesn't resolve my issue.\nI have used the below code to direct to Dyanamic page in page\n \nwixLocation.to(`/members-signup/update/${wixUsers.currentUser.id}`);\n   } )\n\nMany Thanks\nSushant Malviya\n\n\n\n\n\n\n",
            "userEmail": "za@duppe.et",
            "creationTime": 1535940371235
        },
        {
            "id": "fd31a6ff-91d2-52e4-9de0-f27105f25d81",
            "title": "Custom Payment for Wix pay API (Pay Flow) - Need for Client by tonight.",
            "content": "Hi All,\nI have been trying this code on this page for 2 days now:\nhttps://www.wix.com/corvid/forum/community-discussion/custom-payment-amounts-with-pay-api\n\nI have been modifying this example along with it:\nhttps://support.wix.com/en/article/corvid-tutorial-using-the-corvid-pay-api-to-collect-payments-for-a-single-product\n\nhttps://www.youtube.com/watch?v=YJuYl47tjxs\n\n\nIt doesn't work when I modify the example. I am using Square as my payment portal. My client wants this by tomorrow morning EST. I even tried modifying the code to have a construct field. Here is my current code:\nPAGE CODE\n\nimport wixPay from 'wix-pay';\nimport {createMyPayment} from 'backend/BE_PayAPI';\n\nexport function button1_click(event) {\n    createMyPayment($w('#input1').value,$w('#input2').value)\n const invoicenumber = `${$w(\"#input1\").value}`;\n const customamount = `${$w(\"#input2\").value}`\n         .then( (payment) => {\n      wixPay.startPayment(payment.id);\n    } );\n}\n\nBACKEND CODE\nimport wixPay from 'wix-pay-backend';\nexport function createMyPayment(invoicenumber,customamount){\n let cPaymentString = { amount: customamount, \n        items: \n        [{name: invoicenumber, price: customamount}] };   \n return wixPay.createPayment(cPaymentString);\n}\n\n\n\nI am using an example site right now so details might not match branding.\nMy URL: https://andrew0657.wixsite.com/mysite-1\nAny insight tonight would be beyond helpful!",
            "userEmail": "zesoz@ubocej.hn",
            "creationTime": 1522719394911
        },
        {
            "id": "6e37937d-cb3c-5325-baa3-00fbdf0f2cdb",
            "title": "Wix code SDK Warning: The text parameter cannot be set to null or undefined",
            "content": "Hi everybody!\nFirst of all, thank you so much for taking the time to read this!\n \n\nWhat I am trying to do: code my lightbox so that the users can check what are our delivery prices and times in their country. There is one collection called \"Lieferkosten\", that combines this information in 4 columns/fields:  Country (land), Region (region), Delivery fee (versandkosten) and Delivery time (versanddauer). The names in brackets are the respective fieldkeys.\nUnder the two dropdowns where users can select their region and country, there are 3 textboxes that should display: #text55 (selected country name), #text56 (the delivery fee that corresponds to the selected country), #text57 (the delivery time that corresponds to the selected country)\n\nWhat works so far: The client clicks on the #dropdown2 to select what region he comes from. Upon user input (selection of a region) an On Change function causes the #dropdown1 to be activated and display all the countries that belong to this selected region. The country name selected on #dropdown1 is shown on textbox #text55 (however not thanks to code but to the API connection)\n\nProblem:\n#text56 and #text57 either display nothing or remain unchanged.\n\nI have tried several solutions, checked the fieldkeys many times and they do correspond to what is in the collection. On my latest attempt (which is the code below, where I only tested it on #text56) I get the error message:  \"Wix code SDK Warning: The text parameter of \"text56\" that is passed to the text method cannot be set to null or undefined.\" and on the developer tool I find: \"TypeError: Cannot read property 'versandkosten' of undefined\"\n\n...\nexport function dropdown2_change(event) {\n    uniqueDropDown2();\n$w(\"#dropdown1\").enable();\n    NewQuery();\n$w('#text56').text = NewQuery()\n\n}\nfunction NewQuery() {\n let myTextQuery = $w('#dropdown2').value\n   wixData.query(\"Lieferkosten\").eq(\"versandkosten\", myTextQuery) // the first element here is the field key, not the field name.\n.find()\n.then((results) => {\n if(results.items.length > 0) {\n let item = results.items[0];\n let secondText = item.versandkosten; //the field key of the second column\n let thirdText = item.versanddauer; //the field key of the third column\n    }else{\n //put here the code you want to execute in case of no match.\n    }\n})}\n\n \n\n \n\nI´m very new to corvid and don´t know that much about coding so would really appreciate any corrections or tips even if they are an entirely new suggestion of code :)",
            "userEmail": "lugcuge@ojta.eh",
            "creationTime": 1544677970688
        },
        {
            "id": "5380103c-256f-56af-84e2-65ce997bf8f1",
            "title": "repeater with text box with link",
            "content": "I have a repeater connected up to a data collection. Within that repeater I have a text box. I would like to be able to click on it and cause a tab to open with some url based on some field in the data collection. \n\nI have tired : \n1) to use a button - works fine but limits the text to 1 line. \n2) to add the following code :\n\n \n* ignore the populate drop down.\nThis opens the url in the same window. Unfortunatly I could not work with the standard js window.open(<url>).\n\nThanks in advance :)",
            "userEmail": "lisuc@guku.eu",
            "creationTime": 1530635262541
        },
        {
            "id": "26daf1d3-1f27-586c-8d73-abff929b1eee",
            "title": "Collection import replace",
            "content": "I have a collection that I will be importing data from a CSV file. This CSV file is generated from a local database application and is updated on the local system 2 times a month, which we then generate a new CSV file.\n\nThe CSV file (approximately 900 rows, but the total changes each time) imports as expected into the Collection. But, the imported rows are added to the current Collection. And if we sync the data to the live Collection, the data is added to that Collection as well.\n\nSo, for example, if we have a sandbox collection of 900 rows, importing a new CSV file results in 1800 rows and so forth and so on.\n\nWe need the imported CSV file to completely replace the current database contents during import and when syncing to the live collection (even if the imported CSV file has fewer rows). Or as an option, at least be able to easily completely empty a collection before importing a new CSV file.\n\nThanks for any suggestions offered.\n",
            "userEmail": "tah@akisa.so",
            "creationTime": 1521441785420
        },
        {
            "id": "3e738541-095d-55bd-97f5-e432a95e0df6",
            "title": "async function with a foreach loop",
            "content": " Hi guys! \n \n I am getting better but still running into some dead ends with my coding :) \nThis is what I am trying to do:\nI have crated a time-table matrix as collection: Gruppenkalender (see pic1). \n\n \n\nThe idea is that whenever I open the time-table site, the time-table-collection will be cleared, then filled with data from a query function and then finally populates the table on the site.  \n\n \n\n  \nThe code works. I guess it could be a bit more elegant but ok… 😊\nThe problem is, that I am running into a time-out:\nWhen the site loads, I am getting maybe 2 of 15 entries. \nWhen I click button10/Neu it executes the function again and I am getting more and more results.  \nI changed now from a async/await to a .then function but didn’t change much. \n\n Button11/Refresh does refresh the dataset connected to the table and is not changing anything. So I guess it’s the function.\n\nFrontend:\n\nimport wixData from 'wix-data'; \nimport {GruppenKalenderReset} from 'backend/Gruppenkalender'; \nimport {GruppenKalenderAktuell} from 'backend/Gruppenkalender';  \n\n$w.onReady(async function () { \n$w('#repeater5').expand() \nGruppenKalenderReset().then(() => { \nGruppenKalenderAktuell().then(() => { \n$w('#dataset1').refresh() })}) $w('#dataset1').setFilter(wixData.filter().contains(\"title\", \"Montag\"))  });  \n\nexport function dropdown1_change(event) { \nconst filterValue = $w(\"#dropdown1\").value $w('#dataset1').setFilter(wixData.filter().contains(\"title\", filterValue)) }  \n\nexport async function button9_click(event) {     \nGruppenKalenderReset() .then(() => {     \n$w('#dataset1').refresh()}) }  \n\nexport async function button10_click(event) {     GruppenKalenderAktuell().then(() => {         \n$w('#dataset1').refresh()}) }  \n\nexport function button11_click(event) {     \n$w('#dataset1').refresh() } \nBackEnd:\n\nimport wixData from \"wix-data\";\n\nexport function GruppenKalenderReset() { \nreturn wixData.query(\"Gruppenkalender\")         \n .limit(500)         \n .find()         \n .then((results) => {             \nresults.items.forEach((item) => {                 \n item.lyra = null                 \n item.balo = null                 \n item.omego = null                 \n item.amadeo = null                 \n item.pablo = null                 \n item.tymo = null                 \n item.diego = null                 \n item.myro = null \nreturn wixData.update(\"Gruppenkalender\", item)             \n});          \n}) } \n \n \n\n\nexport function GruppenKalenderAktuell() { \nlet GruppentrainingP = \"b188f84c-bf81-4ab6-86bd-da071f430bf3\"     wixData.query(\"AktuellerBetreuer\")         \n .limit(200)         \n .ge('ende', (new Date()))         \n .eq(\"produkt\", GruppentrainingP)         \n .or(             \n   wixData.query(\"AktuellerBetreuer\")                  \n   .isEmpty('ende')             \n   .eq(\"produkt\", GruppentrainingP)         ) \n .find() // Run the query         \n.then(res => {             \nres.items.forEach((itemBT) => {  \n\nwixData.query(\"Gruppentraining\")                     \n.limit(500)                     \n.include(\"gerate\")                     \n.eq(\"aktuellerBetreuer\", itemBT._id)                     \n.find()                     \n.then((results) => {                         \nresults.items.forEach((item) => { \n\nlet TimeSplitter = item.anfang.split(\":\");  \nlet hour = (TimeSplitter[0]);  \nlet Minutes = (TimeSplitter[1]);  \nlet Time = hour.padStart(2, '0') + \":\" + Minutes.padStart(2, '0')  \nlet Geraet = item.gerate.title.toLowerCase()  \n\nwixData.query(\"Gruppenkalender\")                                 \n.limit(1)                                 \n.eq(\"title\", item.title)                                 \n.eq(\"anfang\", Time) \n.find()                                 \n.then((results2) => { \n let data = results2.items[0]  //console  //  let data = results2.  \n if (Geraet === \"lyra\") { data.lyra = item.kunde }  \n if (Geraet === \"balo\") { data.balo = item.kunde }  \n if (Geraet === \"omego\") { data.omego = item.kunde }  \n if (Geraet === \"amadeo\") { data.amadeo = item.kunde }  \n if (Geraet === \"pablo\") { data.pablo = item.kunde }  \n if (Geraet === \"tymo\") { data.tymo = item.kunde }  \n if (Geraet === \"diego\") { data.diego = item.kunde }  \n if (Geraet === \"myro\") { data.myro = item.kunde }  //console.log(data) \n  wixData.update(\"Gruppenkalender\", data)                                         .then((results3) => {  \n let item3 = results3; //see item below                                                                                     \n  })                                         \n .catch((err) => {  let errorMsg = err;                                         });                                 \n  })                         \n })                     \n  })             \n })         \n  }) } \n\n        \n\n \n                                   \n\n\nAny idea how I get this baby workin and more solid?\n\n\n",
            "userEmail": "un@atucopud.es",
            "creationTime": 1542003362796
        },
        {
            "id": "b1229a5b-7230-5142-86ba-cc1da320641e",
            "title": "WixPay How to collect shipping address information",
            "content": "Hello this is my first forum post, so let me know if I can do anything differently in the future!\n\n\nI have a sock subscription website which sells socks every month.  In order to customize the Wix PaidPlans landing page, I have to code the page using the WixPay API.\n\nEverything works fine, even the payment goes through.  The only problem is that the  \nwixPay.startPayment function does not prompt/return a shipping address.  So I don't know where to ship the goods.  The frustrating part is that if you use the regular Wix Store, the checkout page requires both the billing and shipping addresses.  As far as I can tell, there is no way to modify the lightbox that appears in order to collect more information.\n\nPlease let me know if there is indeed a way to import shipping info from the customers using WixPay.\n\nA picture of the WixPay payment collection lightbox:\n\n\n \n\nHere is the code I am using.  Again, it works, but I just need to add the extra shipping address.\n\n\nPage Code:\n\n\n\n$w.onReady(function () {\n\n const currentPlanObject = $w(\"#dynamicDataset\").getCurrentItem();\n const planId = currentPlanObject._id;\n const planPrice = currentPlanObject.price;\n\n  $w('#button1').onClick((event) => {\n\n let user = wixUsers.currentUser;\n let isLoggedIn = user.loggedIn;\n if (!isLoggedIn) {\n      wixUsers.promptLogin().then(() => {\n        processPlan(planId, planPrice);\n      })\n    } else {\n      processPlan(planId, planPrice);\n    }\n });\n});\n\nfunction processPlan(myId) {\n\n \n    wixPaidPlans.purchasePlan(myId).then(orderObject => {\n      wixWindow.openLightbox(\"Contact\", orderObject)\n       .then((goForIt) => {\n if (goForIt) {\n         wixPay.startPayment(orderObject.wixPayOrderId);\n       }\n      });\n    })\n \n}\n \n\n\nBackend code:\n\n\n \nimport wixData from 'wix-data';\n\nexport function wixPaidPlans_onPlanPurchased(event) {\n\n // Insert a title reflecting the type of transaction, and\n // the event's order object (json) into \n // the collection's data field.\n if (event.order.price.amount === 0) {\n let orderData = {\n \"title\": \"Free plan purchased\",\n \"data\": event.order\n        };\n        wixData.insert(\"planEvents\", orderData);\n    } else {\n let orderData = {\n \"title\": \"Regular plan purchased\",\n \"data\": event.order\n        };\n        wixData.insert(\"planEvents\", orderData);\n    }\n}\n\n\n\nLink to how it would look.  This is a product page, not a subscription page, but the problem is the same:\n https://reexlmain.wixsite.com/nysc/stores/products \n\n",
            "userEmail": "guc@cugiton.td",
            "creationTime": 1525458376891
        },
        {
            "id": "cd4fbf3a-de0b-5e3a-8ec1-37ed072f0e91",
            "title": "Filtering an array",
            "content": "I have some code finding records with a queryreferenced function but I want to remove any records that have a live field of false so that I can add locations to the Items collection without them showing on the map straightaway.  The map is seen at abovedown.co.uk/map\nfunction getLocationsMap() {\n var iCat\n if ($w('#icategory').value.length > 0) {\n    iCat = $w('#icategory').value\n  } else {\n    iCat = \"e8dd0d65-dc99-4af1-9506-da1cd9beed38\"\n  }\n\n return wixData.queryReferenced(\"Category\", iCat, \"Items\")\n    .then((results) => {\n return results.items; // items is an array of locations from the collection\n    })\n    .catch((err) => {\n let errorMsg = err;\n    });\n\n}\nMay be I could filter them in the recieving code?\nfunction sendLocations() {\n  getLocationsMap()\n  .then((locations) => {\n\n let markers = [];\n for (let i = 0; i < locations.length; i++) {\n let loc = locations[i];\n      markers.push({title: loc.title, position: {lat: loc.lat, lng: loc.long}});\n    }\n    $w('#htmlMap').postMessage({markers});\n  });\n}\nAlso I don't understand why I need a return on the wixdata line and the results.items but if I remove either it no longer shows the locations on the map.  Your help is much appreciated.",
            "userEmail": "duso@calo.ps",
            "creationTime": 1520211360358
        }
    ]
      const expectedResponse = new TicketsResponse(200, mockData);
      const response = await TicketsHandler.getAllTickets('collect');
      expect(response).toEqual(expectedResponse);
    });

    it('should return all tickets if there is no search query', async () => {
      const expectedResponse = new TicketsResponse(200, data);
      const response = await TicketsHandler.getAllTickets('');
      expect(response).toEqual(expectedResponse);
    });

  });

  describe('Get tickets by title', () => {
    it('should return an array that matches the filter result in title', async () => {
      const mockData = [
        {
            "id": "81a885d6-8f68-5bc0-bbbc-1c7b32e4b4e4",
            "title": "Need a Little Help with Your Site? Hire a Corvid Web Developer",
            "content": "Here at Wix we strive to support you with this community forum, API references, articles, videos and code examples. But sometimes you might need a little extra help to get your site exactly the way you want it. \nHire a developer from the Wix Arena, an online marketplace with top Corvid web developers from around the world. Submit your project details here, and we’ll find the right professional for you.",
            "userEmail": "jug@nesetal.af",
            "creationTime": 1542111235544,
            "labels": [
                "Corvid",
                "Api"
            ]
        },
        {
            "id": "efcc0296-85bc-5d14-a98d-93ebdc58fd1e",
            "title": "need help with pagination on search results page ",
            "content": "hi i need help with adding pagination to my search results page with some code, right now i have everything working fine i just need an example code to add some pagination to search results. here is the search function code i am using:  \n\n\nfunction search() {\n\n    wixData.query('AgentsBuyer')\n\n        .contains('location1', $w(\"#searchBar\").value)\n        .or(wixData.query('AgentsBuyer').contains('zipCodes', $w(\"#searchBar\").value))\n        .or(wixData.query('AgentsBuyer').contains('name', $w(\"#searchBar\").value))\n        .or(wixData.query('AgentsBuyer').contains('location2', $w(\"#searchBar\").value))\n        .or(wixData.query('AgentsBuyer').contains('location3', $w(\"#searchBar\").value))\n        .limit(200)\n        .find()\n\n        .then(results1 => {\n\n            $w('#repeater1').data = results1.items;\n if (results1.length > 0){\n                $w('#noResText').hide();\n            } else {\n                $w('#noResText').show();\n            }\n \n\n        })\n        .catch((err) => {\n let errorMsg = err;\n        });\n\n}\n\n\n\nthanks for all the help in advance !!!!",
            "userEmail": "wofisku@panoho.mv",
            "creationTime": 1530383910714
        },
        {
            "id": "52df3d84-23e8-526c-8d57-f7b37d8d8e0b",
            "title": "Need help pulling subscriber information",
            "content": "I'm looking to retrieve subscriber information from the Wix Paid Plans database using an external program. My current understanding is that this can be done--we just need to pull the subscription plan name and query an email address to find if it exists as a subscriber's email address. \n\nI understand that this resource will be of use, but hoping that the process can be elaborated on by a Wix guru:  https://www.wix.com/corvid/reference/wix-users.User.html#getPricingPlans \n\nBut we're at a total loss on how to implement. Any help would be greatly appreciated!",
            "userEmail": "wezo@de.mt",
            "creationTime": 1527197153572
        },
        {
            "id": "fd31a6ff-91d2-52e4-9de0-f27105f25d81",
            "title": "Custom Payment for Wix pay API (Pay Flow) - Need for Client by tonight.",
            "content": "Hi All,\nI have been trying this code on this page for 2 days now:\nhttps://www.wix.com/corvid/forum/community-discussion/custom-payment-amounts-with-pay-api\n\nI have been modifying this example along with it:\nhttps://support.wix.com/en/article/corvid-tutorial-using-the-corvid-pay-api-to-collect-payments-for-a-single-product\n\nhttps://www.youtube.com/watch?v=YJuYl47tjxs\n\n\nIt doesn't work when I modify the example. I am using Square as my payment portal. My client wants this by tomorrow morning EST. I even tried modifying the code to have a construct field. Here is my current code:\nPAGE CODE\n\nimport wixPay from 'wix-pay';\nimport {createMyPayment} from 'backend/BE_PayAPI';\n\nexport function button1_click(event) {\n    createMyPayment($w('#input1').value,$w('#input2').value)\n const invoicenumber = `${$w(\"#input1\").value}`;\n const customamount = `${$w(\"#input2\").value}`\n         .then( (payment) => {\n      wixPay.startPayment(payment.id);\n    } );\n}\n\nBACKEND CODE\nimport wixPay from 'wix-pay-backend';\nexport function createMyPayment(invoicenumber,customamount){\n let cPaymentString = { amount: customamount, \n        items: \n        [{name: invoicenumber, price: customamount}] };   \n return wixPay.createPayment(cPaymentString);\n}\n\n\n\nI am using an example site right now so details might not match branding.\nMy URL: https://andrew0657.wixsite.com/mysite-1\nAny insight tonight would be beyond helpful!",
            "userEmail": "zesoz@ubocej.hn",
            "creationTime": 1522719394911
        }
    ]
      const expectedResponse = new TicketsResponse(200, mockData);
      const response = await TicketsHandler.getTicketsByTitle('need');
      expect(response).toEqual(expectedResponse);
    });

  });
  
});
