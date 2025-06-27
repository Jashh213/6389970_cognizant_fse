import org.junit.Test;
import Mockito.Exercise2.ExternalApi;
import Mockito.Exercise2.MyService;
import static org.mockito.Mockito.*;

public class MyServiceTestt {

    @Test
    public void testVerifyInteraction() {

        ExternalApi mockApi = mock(ExternalApi.class);

        MyService service = new MyService(mockApi);

        service.fetchData();
        verify(mockApi).getData();
        System.out.println("✅ Interaction verified successfully!");
    }
}