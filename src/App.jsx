import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import UserCard from "./components/UserCard";

const POSTS = [
  {
    id: 1,
    title: "React คืออะไร?",
    body: "คือ library สำหรับสร้าง UI ของเว็บไซต์ โดยใช้แนวคิด Component เพื่อให้โค้ดเป็นระเบียบ นำกลับมาใช้ซ้ำได้ และทำให้หน้าเว็บอัปเดตได้รวดเร็ว",
  },
  {
    id: 2,
    title: "ทำไมต้องใช้ Components?",
    body: "Components ช่วยแบ่ง UI ออกเป็นส่วนย่อย ๆ ทำให้โค้ดเป็นระเบียบ แก้ไขง่าย และสามารถนำ component เดิมกลับมาใช้ซ้ำได้หลายครั้ง",
  },
  {
    id: 3,
    title: "JSX คืออะไร?",
    body: "คือ syntax ของ React ที่ทำให้เราเขียนโค้ดลักษณะเหมือน HTML ภายใน JavaScript เพื่อสร้าง UI ได้ง่ายและอ่านโค้ดได้สะดวกขึ้น",
  },
  {
    id: 4,
    title: "Props ทำงานอย่างไร?",
    body: "คือค่าที่ส่งจาก component หนึ่งไปยังอีก component หนึ่ง เพื่อให้ component รับข้อมูลและนำไปแสดงผลหรือใช้งาน เหมือนการส่งพารามิเตอร์ให้ฟังก์ชันใน React",
  },
];

const USERS = [
  { id: 1, name: "อยากนอน ตอนเช้า", email: "yaknoon@dev.com" },
  { id: 2, name: "ทีคุง เสียงเพรช", email: "t-kung@dev.com" },
  { id: 3, name: "ชื่อไรดี คิดไม่ออกละ", email: "chueraidee@dev.com" },
];

function App() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <PostList posts={POSTS} />
        </div>

        <div>
          <h2>สมาชิก</h2>

          {USERS.map((user) => (
            <UserCard key={user.id} name={user.name} email={user.email} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
