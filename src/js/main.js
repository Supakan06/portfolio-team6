document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar");
  
    const observer = new MutationObserver(() => {
      const menuButton = navbarContainer.querySelector("#menuButton");
      const sidebarMenu = navbarContainer.querySelector("#sidebar");
      const closeSidebarButton = sidebarMenu?.querySelector("#closeSidebar");
      const menuLinks = sidebarMenu?.querySelectorAll('a');
  
      // เพิ่ม CSS ใน JavaScript เพื่อแก้ไข z-index ของ sidebar และ hero
      const sidebar = document.getElementById('sidebar');
      const hero = document.getElementById('hero');
  
      if (sidebar) {
        sidebar.style.position = 'fixed'; // ให้ sidebar อยู่ที่ตำแหน่งคงที่
        sidebar.style.top = '0';
        sidebar.style.left = '0';
        sidebar.style.zIndex = '9999'; // ให้ sidebar อยู่เหนือ hero
      }
  
      if (hero) {
        hero.style.position = 'relative'; // ให้ hero อยู่ด้านล่างของ sidebar
        hero.style.zIndex = '1'; // ให้ hero อยู่ด้านหลัง sidebar
      }
  
      // ตรวจสอบว่าเมนูและปุ่มเมนูถูกเชื่อมต่อ
      if (menuButton && sidebarMenu) {
        // เปิด/ปิดเมนูเมื่อคลิกที่ปุ่มเมนู
        menuButton.addEventListener("click", () => {
          if (sidebarMenu.style.transform === "translateX(0%)") {
            sidebarMenu.style.transform = "translateX(-100%)"; // ซ่อนเมนู
          } else {
            sidebarMenu.style.transform = "translateX(0%)"; // แสดงเมนู
          }
        });
  
        // ปิดเมนูเมื่อคลิกปุ่มปิด
        if (closeSidebarButton) {
          closeSidebarButton.addEventListener("click", () => {
            sidebarMenu.style.transform = "translateX(-100%)"; // ซ่อนเมนู
          });
        }
  
        // ปิดเมนูเมื่อคลิกที่ลิงก์ในเมนู
        if (menuLinks) {
          menuLinks.forEach(link => {
            link.addEventListener("click", () => {
              sidebarMenu.style.transform = "translateX(-100%)"; // ซ่อนเมนูเมื่อคลิกลิงก์
            });
          });
        }
  
        // เริ่มต้นให้เมนูอยู่ในสถานะที่ปิด (ซ่อน)
        sidebarMenu.style.transform = "translateX(-100%)";
  
        observer.disconnect();  // ยกเลิก observer หลังจากที่เชื่อมโยง listener แล้ว
      }
    });
  
    observer.observe(navbarContainer, { childList: true, subtree: true });
  });
  