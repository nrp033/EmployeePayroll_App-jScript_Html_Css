/* UC 1 */
 
html body{
    margin: 0;
    height: 100%;
}
 
.header{
    padding: 15px 0;
    background-color: #ffffff;
}
 
.header-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border:0px solid green;
}
 
.logo-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    border:0px solid green;
    width: 80%;
}
 
.logo-content-img{
    border:solid 0px #42515f;
}
 
.emp-text{
    font:normal normal bold 20px/25px Montserrat;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}
 
.emp-payroll{
    color: #42515f;
 
}
 
*{
    box-sizing: border-box;
}
 
.main-content{
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px);
    background-color: #f7f7f7;
    padding: 30px 0 10px;
    box-sizing: border-box;
}
 
.header-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 25px;
}
 
.emp-detail-text{
    font: normal normal bold 24px/25px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
}
 
.emp-count{
   background-color: #82a70c;
   color: #ffffff;
   border-radius: 42%;
   font-size:16px;
   width:26px;
   text-align: center;
   display: inline-block;
}
 
.add-button{
    font: normal normal bold 24px/25px Roboto;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    background:#82a70c 0% 0% no-repeat padding-box ;
    border:none;
    border-radius:5px;
    padding:5px 18px;
    outline: none;
    cursor:pointer;
    text-decoration: none;
}
 
.table-main{
    widows: 80px;
    margin: 0 auto;
    overflow: auto;
}
 
.table{
    width: 80%;
    border-collapse: separate;
    border-spacing: 0 15px;
    min-width: 800px;
}
 
td, th{
    text-align:left;
    padding:5px 8px;
 
}
 
th{
    background:#42515f 0% 0% no-repeat padding-box;
    border-radius: 3px 3px 0px 0px;
    text-align: left;
    font:normal normal medium 18px/24px Roboto;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity:1;
    border:0px solid #dddddd;
}
 
tr:not(:first-child){
    background: #ffffff;
    border:1px solid #e3e3e3;
    border-radius: 3px;
 
}
 
td{
    font: normal normal 14px/21px Roboto;
    letter-spacing: 0px;
    color: #3d3d3d;
    opacity:1;
}
 
td:first-child{
    display: flex;
    align-items: center;
}
 
td img:first-child{
    margin-right:10px;
}
 
td img{
    cursor:pointer;
}
 
.dept-label{
    background-color:#e9fea5 ;
    border-radius: 40%;
    width:fit-content;
    padding:1px 7px;
    text-align:center;
    font-size:14px;
    display: inline-block;
    font-weight: 300;
    margin-bottom: 8px;
}


