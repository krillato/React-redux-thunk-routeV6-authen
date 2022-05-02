เกี่ยวกับ Redux

*Redux
npm install react-redux
npm install --save react-redux
yarn add react-redux
*Redux Thunk
npm i redux react-redux redux-thunk
"redux-devtools-extension": "^2.13.9",
"redux-persist": "^6.0.0",

เก็บข้อมูล จากForm ขึ้นไปยัง store เพื่อดึงมาใช้สำหรับการตรวจสอบ Auth เมื่อมีการ login

จัดการ action = ชื่อการทำงาน
reducer = รับ export จาก action และ type มาใช้งานที่ switch-case
type = ประเภทของตัวแปรที่จะประกาศใช้(ts interface)
ในโฟลเดอร์ของ store

ทดสอบเก็บค่าจากการ fetch api ลงใน store ของ โฟลเดอร์ member ที่หน้า pages/Member.jsx

ที่ไฟล์ index.tsx จะมีการเรียกใช้ store , persistor ที่ถูก export มาจาก Folder store เพื่อใช้ใน tag Provider สำหรับเป็นการส่งค่า
และ PersistGate เป็นการใช้ค่าใน stroe thunk
