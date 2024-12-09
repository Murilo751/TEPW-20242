package br.edu.unichristus.service;

import br.edu.unichristus.data.dto.UserDTO;
import br.edu.unichristus.data.dto.UserLowDTO;
import br.edu.unichristus.data.model.User;
import br.edu.unichristus.dozer.DozerConverter;
import br.edu.unichristus.exception.CommonsException;
import br.edu.unichristus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public UserDTO save(UserDTO user){
        if(user.getName().length() > 150){
            throw new CommonsException(HttpStatus.BAD_REQUEST,
                    "unichristus.service.user.badrequest",
                    "O limite de caracteres do nome do usuário é 150");
        }
        //Converte UserDTO em User
        var entity = DozerConverter.parseObject(user, User.class);

        //Recebe retorno do save (User)
        var entityDTO = repository.save(entity);

        //Converte e retorna o User em UserDTO
        return DozerConverter.parseObject(entityDTO, UserDTO.class);
    }

    public List<UserDTO> findAll(){
        return DozerConverter.parseListObjects(
                repository.findAll(), UserDTO.class);
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    public UserDTO findById(Long id){
        var entity = repository.findById(id);
        if(entity.isEmpty()){
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.service.uuser.notfound",
                    "O usuário com a ID informada, não foi encontrado");
        }
        return DozerConverter.parseObject(entity.get(), UserDTO.class);
    }

    public UserLowDTO loginUser(UserDTO dto) {
        var user = repository.findByLoginAndPassword(dto.getLogin(), dto.getPassword());
        if(user == null) {
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.backend.service.user.notfound.exception",
                    "Crendenciais inválidas!");
        }

        return DozerConverter.parseObject(user, UserLowDTO.class);
    }
}
