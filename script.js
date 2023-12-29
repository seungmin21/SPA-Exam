const tags = document.querySelectorAll('.tag');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');

tags.forEach(tag => {
  tag.addEventListener('click', function() {
    // 텍스트 오른쪽으로 이동
    const clickedText = this.textContent;
    const dot = document.createElement('span');
    dot.classList.add('dot');
    this.textContent = '';
    this.appendChild(dot);
    setTimeout(() => {
      this.style.visibility = 'hidden';
      this.style.width = '0';
      dot.style.marginLeft = '0';
      setTimeout(() => {
        this.style.visibility = 'visible';
        this.style.width = 'auto';
        this.textContent = clickedText;
      }, 500);
    }, 500);

    // h1 태그에 출력
    output1.textContent = clickedText;
    output2.textContent = clickedText;
  });
});
