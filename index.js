function rotateRight(head, k) {
  if (!head || k === 0) return head;
  let length = 1;
  let tail = head;
  while (tail.next) {
    length++;
    tail = tail.next;
  }
  k = k % length;
  if (k === 0) return head;
  let newTail = head;
  for (let i = 1; i < length - k; i++) newTail = newTail.next;
  const newHead = newTail.next;
  newTail.next = null;
  tail.next = head;
  return newHead;
}
