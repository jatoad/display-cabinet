## Display Cabinet
Display Cabinet is a comprehensive application designed to facilitate the organization and presentation of personal collections. made for enthusiasts and collectors, this app serves as a showcase for users to upload, categorize, and exhibit their possessions.

To initiate the process, users are encouraged to upload high-quality images and information on each item in their collection. The app employs an intuitive categorization system, allowing for efficient sorting and cataloging. This organization allows the user to transform their various collections into a curated gallery, providing users with a structured and visually appealing overview of their collection.

Beyond its organizational capabilities, Display Cabinet distinguishes itself as a social platform for collectors and like-minded individuals, to view other collections through browsing other users' cabinet drawers.

In summary, Display Cabinet serves as a tool for collectors to not only archive and categorize their items but also engage with a community of fellow enthusiasts. By adhering to the structured approach outlined within the app, users can create a comprehensive and visually pleasing digital representation of their collections while participating in a broader community of collectors.

### How to use

Display cabinet is designed to be easy and intuitive to use. to organise their collection, different draws can be created, separating different catogeries witjin their collection. within these drawers, the user can then upload images with a description of their items. 
if there is updated information on such items, the user can later edit posts at any point with the more up to date information, allowing them to keep their colllection as reliable as possible, also aiding other users in identifying teir own items woth similar characteristics.
users are also able to like items in drawers. this functionality allows the user t oidentify their most popular display pieces, as well as being able to give a form of feedback to others items.

### component overview

#### asset
- The component uses the react-bootstrap library for the Spinner component.
- Conditionally renders a spinner, an image, and a message based on the props.
- The classNames are managed using the styles object from the Asset.module.css module.
- Uses the shorthand && logical operator for conditional rendering.

#### Avatar
- The component uses the styles object from the Avatar.module.css module for styling.
- Renders an img element with the specified src, height, and width.
- Displays additional text if provided.

#### MoreDropdown.js
- Utilizes react-bootstrap for the Dropdown component.
- Assumes the use of Font Awesome icons for the ellipsis, edit, and delete icons.
- Forward Ref:
Uses React.forwardRef to pass a ref to the ellipsis icon, required by Dropdown for positioning.
- ThreeDots Component:
Represents the ellipsis icon.
Passes the ref to the ellipsis icon and handles the click event.
- Dropdown Structure:
Utilizes the ThreeDots component as the toggle for the dropdown.
Dropdown items include icons for edit and delete, with corresponding click handlers (handleEdit and handleDelete).


### user stories

5. As a User, I can search for drawers with keywords, so that I can find the drawers and user profiles I am most interested in. 

6. As a User I would like to view items added by users to a drawer so that I can list and like them.

7.As an owner of a item I can edit my item so that I can fix or update my existing item

8. As a User I can see a list of the most followed profiles so that I can see which profiles are popular

9. As a user, I can view basic profile information like picture and name so that I can easily check a users profile page.

10. As a user I can view other users profiles so that I can see their profile stats and learn more abount them.

11. As a logged on user I can follow and unfollow other users, so that I can see and remove items by specific users in my item feed.