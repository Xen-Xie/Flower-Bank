const sidebar = document.querySelector("#bar");
        const openSidebar = document.querySelector("#sidebars");
        const closeSidebar = document.querySelector("#closeSidebar");

        // Open Sidebar
        openSidebar.addEventListener("click", (e) => {
          e.preventDefault();
          sidebar.classList.remove("translate-x-full"); // Slide in
        });