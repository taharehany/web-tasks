fetch('http://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=2fa1067afb3e4f4b8c7f1aa16f5448a0', {}).then(
    response => {
        return response.json()
    }
).then(
    data => {   

        //set data in my data variable
        const myData = data.articles    
        //get posts div
        const thePosts = document.querySelector('#bigContainer .posts')
        //create row
        const rowContainer = document.createElement('div')
        rowContainer.setAttribute('class', 'row')

        //append row to the posts div
        thePosts.appendChild(rowContainer)

        //for loop elements
        myData.forEach(element => {
            //create the post elements to fetch
            const createElements = (ele) => {
                return document.createElement(ele)
            }      
            const postImage = createElements('img')
            const postTitle = createElements('h2')
            const postAuthor = createElements('span')
            const postDate = createElements('span')
            const postDescription = createElements('p')

            //set attribute our components
            postImage.setAttribute('class', 'postImage img-fluid')
            postTitle.setAttribute('class', 'postTitle')
            postAuthor.setAttribute('class', 'postAuthor')
            postDate.setAttribute('class', 'postDate') 
            postDescription.setAttribute('class', 'postDescription')

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

            //put image in div 
            const imageContainer = document.createElement('div')
            imageContainer.setAttribute('class', 'image')
            imageContainer.appendChild(postImage)
            post.appendChild(imageContainer)
            
            //append auther and post date to the post
            post.appendChild(postAuthor)
            post.appendChild(postDate) 

            //put h2 in a
            const h2Container = document.createElement('a')
            h2Container.setAttribute('class', 'go')
            h2Container.setAttribute('target', '_blank')
            h2Container.appendChild(postTitle)
            post.appendChild(h2Container)

            //append post description to the post
            post.appendChild(postDescription)

            //set content of the elements
            postImage.src = element.urlToImage
            postTitle.textContent = element.title
            postAuthor.textContent = element.author
            postDate.textContent = element.publishedAt
            postDescription.textContent = element.description 

            //set href of (a) attribute
            h2Container.href = element.url
            
            //if (descripton) not found
            if(postDescription.textContent == '') {
                post.parentElement.remove()
            }
        });
    }
).catch(() => {
    alert('there is some thing wrong')
});
