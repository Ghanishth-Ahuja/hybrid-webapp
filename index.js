const id = (id) => document.getElementById(id);
const app = {
  count: 0,
  async getUsersByName(username) {
    this.count++;
    return await fetch(`https://api.github.com/search/users?q=${username}`);
  },
};
document.getElementById("getrepos").addEventListener("click", async (e) => {
  e.preventDefault();
  id("data").innerHTML = `
 <style>
  .loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
  .outer{
  display:flex;
  justify-content:center;
  align-items:center;
  border: 1px solid black;

}
  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}</style><div class="outer"><div class="loader"></div></div>

  `;
  setInterval;
  console.log(e);

  const username = id("name").value;

  const resp = app.getUsersByName(username);
  // const repos = fetch(
  //   `https://api.github.com/users/joshi0507/repos?sort=updated`,
  // );
  // console.log(repos);
  const jsondata = await resp.json();
  const data = jsondata?.items;
  globalThis.data = data;
  console.log(data);
  console.log(jsondata);
  const table = document.createElement("table");
  id("data").innerHTML = ``;
  table.innerHTML = `
  <thead><tr>
  <td>Sr</td>
  <td>Image</td>
  <td>UserName</td>
  <td>Repo URL</td>
  </tr>
  </thead>`;
  let newnode;
  if (jsondata.items.length === 0) {
    console.log("inside 0");
    newnode = document.createElement("tr");
    newnode.innerHTML = "<td colspan=4><img src='nodatafound.webp' ></td>";
    table.append(newnode);
  } else {
    jsondata?.items?.forEach((element, index) => {
      newnode = document.createElement("tr");
      newnode.innerHTML = `
    
    <td><p>${index + 1}</p></td>
    <td><img loading="lazy" width=100 src=${element.avatar_url} login=${element.login} alt="image"/></td>
    <td><h1>${element.login}</h1></td>
    <td><a href=${element.html_url} target="blank">${element.html_url}</a>
</td>
    `;
      table.append(newnode);
    });
  }
  const div = id("data");
  div.style.maxWidth = "80%";
  div.style.backgroundColor = "#212224";
  div.style.margin = "0 auto";
  div.style.borderRadius = "10px";
  div.style.marginTop = "20px";
  table.style.maxWidth = "100%";
  // table.style.backgroundColor = "#848992";
  table.style.borderRadius = "5px";
  table.style.border = "1px solid #848992";

  div.appendChild(table);
});
// id("closetab").addEventListener("click", () => {
//   window.close();
//   // window.location.replace("https://youtube.com");
// });
document.addEventListener("DOMContentLoaded", () => {
  id("data").addEventListener("click", (e) => {
    console.log(e);
    const login = window.btoa(e.target.attributes.login.value);
    console.log(login);
    if (e.target.nodeName === "IMG") {
      window.location.assign(
        `http://127.0.0.1:5500/detailspage.html?login=${login}`,
      );
    }
  });
});

id("css").addEventListener("click", (e) => {
  console.log("clicked");
  if (e.target.checked) {
    const cssElement = document.querySelector(
      'link[rel="stylesheet"],link[href="index.css"]',
    );
    // console.log(cssElement);
    document.head.removeChild(cssElement);
  } else {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "index.css";
    document.head.appendChild(css);
  }
});
document.addEventListener("scrollend", () => {
  console.log("scroll end");
});
