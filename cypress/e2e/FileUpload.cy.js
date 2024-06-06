import 'cypress-file-upload';
import 'cypress-iframe';

describe('File Upload', (()=> {

    it('Single File Uplaod',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile('Xray.pdf');
 //       cy.get("#file-upload").selectFile('Xray.pdf');
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })

    it("File Upload-Rename", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:'Xray.pdf', fileName:'test1'});
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })

    it("File Upload-Drag and Drop", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile("Xray.pdf", {subjectType:'drag-n-drop'});
        cy.wait(3000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains('Xray.pdf');

    })

    it("Multiple FIles Uplaod",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(["Xray.pdf", "586.jpg"]);
        cy.wait(3000);
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')

    })

    it("File-upload- SHadow DOM", ()=>{

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/");
 //       cy.frameLoaded('.demo-frame');   //Load the frame
 //       cy.iframe('.demo-frame')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("Xray.pdf");
  //      cy.get("smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(1) > smart-button:nth-child(1) > button:nth-child(1)", {includeShadowDom:true}).attachFile("Xray.pdf");
        cy.wait(3000);
 //       cy.get(".smart-item-name", {includeShadowDom:true}).contains('test1.pdf');

    })

    it.only("File Upload: DOM", ()=>{

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/");
        cy.get('.smart-browse-input')
     //   .click({force:true})  OR
     //   .invoke('show')

        cy.wait(3000);



    })



}))