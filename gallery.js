import { createApi } from "unsplash-js"

const unsplash = createApi({
    accessKey: import.meta.env.VITE_ACCESS_KEY,
});

const createCardFromImage = (unsplashItem) => `<li class="image-card" style="background-image: url(${unsplashItem.urls.regular});">
    <button>
        <i class="fa fa-arrow-right"></i>
        <a href=${unsplashItem.urls.regular}>${unsplashItem.urls.regular}</a>
    </button>
</li>`
  
const extractImagesFromResponse = (unsplashResults) => unsplashResults.map((unsplashItem) => createCardFromImage(unsplashItem));

export const fetchPhotos = async (keyword) => {
    const images = await unsplash.search.getPhotos({
        query: keyword,
        page: 1,
        perPage: 30,
    });
    return images.response.results;
};
    
export const injectGallery = (unsplashResults) => {
    const galleryEntryPoint = document.querySelector("#gallery");
    galleryEntryPoint.innerHTML = `${extractImagesFromResponse(unsplashResults).join('')}`;
};