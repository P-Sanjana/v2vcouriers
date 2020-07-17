export class Courier{
    sendername:string;
    email:string;
    phnumber:string;
    senderaddress:string;
    sendercity:string;
    senderdistrict:string;
    senderstate:string;
    sendercountry:string;
    agree:boolean;
    contacttype:string;
    repname:string;
    repphnumber:string;
    repaddress:string;
    repcity:string;
    repdistrict:string;
    repstate:string;
    repcountry:string;
    courierservice:string;
    pickupdate:Date;
    status:string;
    wt:string;
    vol:string;
    price:string;  
    constructor(sendername:string,email:string,phnumber:string,senderaddress:string,sendercity:string,senderdistrict:string,senderstate:string,
        sendercountry:string,agree:boolean,contacttype:string,repname:string,repphnumber:string,repaddress:string,repcity:string,repdistrict:string,repstate:string,
        repcountry:string,courierservice:string,pickupdate:Date,status:string,wt:string,vol:string,price:string) {
            this.sendername=sendername;
            this.email=email;
            this.phnumber=phnumber;
            this.senderaddress=senderaddress;
            this.sendercity=sendercity;
            this.senderdistrict=senderdistrict;
            this.senderstate=senderstate;
            this.sendercountry=sendercountry;
            this.agree=agree;
            this.contacttype=contacttype;
            this.repname=repname;
            this.repphnumber=repphnumber;
            this.repaddress=repaddress;
            this.repcity=repcity;
            this.repdistrict=repdistrict;
            this.repstate=repstate;
            this.repcountry=repcountry;
            this.courierservice=courierservice;
            this.pickupdate=pickupdate;
            this.status=status;
            this.wt=wt;
            this.vol=vol;
            this.price=price;
       
    }
}
export const ContactType = ['None', 'Phone', 'Email'];
export const courierservice=['Standard','Overnight','SameDayExpress','International','Pallet'];