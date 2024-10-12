const apiKey = 'IiCJmAZMPy8hscPA758atlgzPB1u7wBC2273qXoq';
// Function to fetch and display news
async function fetchNews(query, elementId) {
    const url = `https://api.thenewsapi.com/v1/news/all?api_token=${apiKey}&language=en&domains=straitstimes.com,channelnewsasia.com&search=${query}&search_fields=title,keywords&sort=published_at&limit=10`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.data !== '') {
        const articlesDiv = document.getElementById(elementId);
        articlesDiv.innerHTML = ''; // Clear previous articles
        console.log(data.data); // Log the data to the console for checking
        data.data.forEach(article => {
          const articleHTML = `
            <div class="newsItem">
              ${article.image_url ? `<img src="${article.image_url}" style="margin: 1rem; border-radius: 1.5rem; width: 15rem; height: 12rem;">` : ''}
              <div class="newsContent">
                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                <h4>Published: ${new Date(article.published_at).toDateString()}</h4>
                <p>${article.description || 'No description available.'}</p>
              </div>  
            </div>
          `;
          articlesDiv.innerHTML += articleHTML;
        });
      } else {
        console.error('Error fetching news:', data.message);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  // Fetch news for the selected section
fetchNews('drugs', 'drugs-articles');
fetchNews('vape', 'vape-articles');

// Function to show the selected news section
function showSection(sectionId) {
  document.getElementById('drugs').style.display = 'none';
  document.getElementById('vape').style.display = 'none';

  document.getElementById(sectionId).style.display = 'block';
}

// Show Technology News by default
showSection('drugs');


