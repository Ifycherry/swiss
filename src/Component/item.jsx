// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Item({title, desc, image, imageHeight, price}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{height: imageHeight}} />
      <Card.Body>
        <Card.Title>title</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <p>Price: {price}</p>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Item;