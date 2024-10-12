using UnityEngine;
using UnityEngine.InputSystem;

public class CatController : MonoBehaviour
{
    [SerializeField] private Rigidbody catRb;
    
    [SerializeField] private float dragThreshold = 20f;
    [SerializeField] private float moveSpeed = 0.01f;
 
    
    private GameControls gameControls;
    private Vector2 startPointerPosition;
    private Vector2 currentPointerPosition;
    private Vector2 dragDirection;
    private Vector3 moveDirection;
    private bool pointerPressed = false;
    private bool isDragging = false;

    private void Awake()
    {
        gameControls = new GameControls();
    }

    private void OnEnable()
    {
        gameControls.Player.PointerPress.started += OnPointerPress;
        gameControls.Player.PointerPress.canceled += OnPointerRelease;
        gameControls.Player.PointerPosition.performed += OnPointerMove;
        gameControls.Enable();
    }
    
    private void OnDisable()
    {
        gameControls.Player.PointerPress.started -= OnPointerPress;
        gameControls.Player.PointerPress.canceled -= OnPointerRelease;
        gameControls.Player.PointerPosition.performed -= OnPointerMove;
        gameControls.Disable();
    }

    private void FixedUpdate()
    {
        MoveCat();
    }

    private void OnPointerPress(InputAction.CallbackContext context)
    {
        startPointerPosition = gameControls.Player.PointerPosition.ReadValue<Vector2>();
        pointerPressed = true;
    }
    
    private void OnPointerRelease(InputAction.CallbackContext context)
    {
        pointerPressed = false;
        isDragging = false;
    }
    
    private void OnPointerMove(InputAction.CallbackContext context)
    {
        if (!pointerPressed)
        {
            return;
        }

        DetectDrag(context.ReadValue<Vector2>());
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
        catRb.Move(newPosition, newRotation);
    }
}
