/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

// 声明外号
const creator = 'rainn'

// 渲染图书列表函数
function getBooksList () {
  axios({
    url:'http://hmajax.itheima.net/api/books',
    method: 'GET',
    params: {
      creator
    }
  }).then(re => {
    // console.log(re.data.data)
    // 数组map函数返回一个新数组，用join方法合并数组
    document.querySelector('.list').innerHTML = re.data.data.map((item, index) => {
      return `
      <tr>
          <td>${ index+1 }</td>
          <td>${ item.bookname }</td>
          <td>${ item.author }</td>
          <td>${ item.publisher }</td>
          <td>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>
      `
    }).join('')
  })
}

getBooksList()


/**
 * 目标2：新增图书
 * 2.1 新增弹框，控制显隐
 * 2.2 收集表单数据，提交到服务器保存
 * 2.3 刷新图书列表，清空表单
 * */

const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)
document.querySelector('.add-btn').addEventListener('click', () => {
  const form = document.querySelector('.add-form')
  const newBook = serialize(form, {hash: true, empty: true})

  // 对象解构
  const {bookname, author, publisher} = newBook

  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method: 'POST',
    data: {
      bookname,
      author,
      publisher,
      creator,
    }
  }).then(re => {
    getBooksList()

    form.reset()

    addModal.hide()
  })

})
