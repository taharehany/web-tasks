fetch('https://jsonplaceholder.typicode.com/photos', {}).then(
    response => {
        return response.json()
    }
).then(
    data => {    
        const thePosts = document.querySelector('#bigContainer .posts')
        //create row
        const rowContainer = document.createElement('div')
        rowContainer.setAttribute('class', 'row')
        //append row to the posts div
        thePosts.appendChild(rowContainer)

        data.slice(-100).forEach(element => { //get only **100** elements

            //create the post elements to fetch
            const createElements = (ele) => {
                return document.createElement(ele)
            }      
            const postImage = createElements('img')
            const postTitle = createElements('h2')

            //set attribute our components
            postImage.setAttribute('class', 'postImage img-fluid')
            postTitle.setAttribute('class', 'postTitle')

            //create post div inside posts div
            const post = document.createElement('div')
            post.setAttribute('class', 'post')

            //create col container
            const colContainer = document.createElement('div')
            colContainer.setAttribute('class', 'col-md-6 col-lg-4')

            //append col to row
            rowContainer.appendChild(colContainer)

            //append post child to the col container
            colContainer.appendChild(post)

            post.appendChild(postImage)
            post.appendChild(postTitle)

            const obj = {
                img: element.thumbnailUrl,
                title: element.title    
            }
            //set content of the elements
            postImage.src = obj.img
            postTitle.textContent = obj.title
            
        });
    }
).catch(() => {
    alert('there is some thing wrong')
});