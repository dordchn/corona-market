
function boxCollides(box1, box2) {
  return !(
    box1.x + box1.w <= box2.x ||
    box1.x > box2.x + box2.w ||
    box1.y + box1.h <= box2.y ||
    box1.y > box2.y + box2.h
  );
}

// Returns true if box1 completely contains in box2.
function boxContains(box1, box2) {
  return box2.x > box1.x &&
    box2.y > box1.y &&
    box2.x + box2.w <= box1.x + box1.w &&
    box2.y + box2.h <= box1.y + box1.h;
}

function arcCollides(arc1, arc2) {
  return Math.hypot(arc1.x - arc2.x, arc1.y - arc2.y) <= arc1.r + arc2.r;
}

export { boxCollides, boxContains, arcCollides };