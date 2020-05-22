const apiKey = 'meoFXRApqFPMpNCMxtiwNDU0LNHILicmufMAxzjJBb_eSGctu24dNV9qnW2JeCx5nehRik90zpesFJB6WHaQClCuk9KuVd8wMjlkzCX880wS9WH95G3PlGS8xfXGXnYx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers:{Authorization: `Bearer ${apiKey}`}},)
        .then(response=>response.json())
        .then(jsonResponse=> {
            if(jsonResponse.businesses){
               return jsonResponse.businesses.map(business => 
                (
                {
                  id : business.id,
                  imageSrc : business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.postal_code,
                  category: business.categories.title,
                  rating: business.rating,
                  reviewCount: business.review_count
                  }
              ));
            }
    })
    .catch(error=> console.log(error));
    }
};
export default Yelp;