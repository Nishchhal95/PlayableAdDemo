using UnityEngine;

public class CatController : MonoBehaviour
{
    public bool GameOver { get; private set; }
    
    [SerializeField] private Rigidbody catRb;
    
    [LunaPlaygroundField("Threshold to Drag", 2, "Game Settings")]
    [SerializeField] private float dragThreshold = 20f;
    [LunaPlaygroundField("Player Move Speed", 1, "Game Settings")]
    [SerializeField] private float moveSpeed = 0.01f;
 
    private Vector2 startPointerPosition;
    private Vector2 currentPointerPosition;
    private Vector2 dragDirection;
    private Vector3 moveDirection;
    private bool pointerPressed = false;
    private bool isDragging = false;

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            OnPointerPress();
        }
        else if(Input.GetMouseButtonUp(0))
        {
            OnPointerRelease();
        }

        OnPointerMove();
    }

    private void FixedUpdate()
    {
        MoveCat();
    }

    private void OnPointerPress()
    {
        startPointerPosition = Input.mousePosition;
        pointerPressed = true;
    }
    
    private void OnPointerRelease()
    {
        pointerPressed = false;
        isDragging = false;
    }
    
    private void OnPointerMove()
    {
        if (!pointerPressed)
        {
            return;
        }

        DetectDrag(Input.mousePosition);
    }

    private void DetectDrag([Bridge.Ref] Vector2 currentPointerPos)
    {
        currentPointerPosition = currentPointerPos;
        // This is not normalized as we want to make sure the further we drag the faster we move.
        dragDirection = currentPointerPosition - startPointerPosition;
        moveDirection = new Vector3(dragDirection.x, 0, dragDirection.y);
        if (dragDirection.magnitude <= dragThreshold)
        {
            isDragging = false;
            return;
        }
        isDragging = true;
    }

    private void MoveCat()
    {
        if (!isDragging)
        {
            return;
        }

        Vector3 newPosition = catRb.position + moveDirection * (moveSpeed * Time.fixedDeltaTime);
        Quaternion newRotation = Quaternion.LookRotation(moveDirection);
        catRb.velocity = Vector3.zero;
        catRb.velocity = newPosition - catRb.position;
        //catRb.MovePosition(newPosition);
        catRb.MoveRotation(newRotation);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag("Win"))
        {
            return;
        }
        LunaLifeCycleEnd();
    }

    public void GameEnd()
    {
        GameOver = true;
        LunaLifeCycleEnd();
    }

    private void LunaLifeCycleEnd()
    {
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
    }
}
