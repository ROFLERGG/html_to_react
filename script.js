function AllHide() {
  const tabs = document.querySelectorAll('.tab');
  const tabsContent = document.querySelectorAll('.tab-content');
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabsContent.forEach((tabcontent, j) => {
        console.log(i, j)
        tabcontent.style.display = i === j ? "flex" : "none"
      })
    })
  })
};

AllHide();