import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/header";
import Tags from "./components/Tags/tags";
import Notes from "./components/Notes/notes";
import {Switch, Route, Redirect} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus} from "@fortawesome/free-solid-svg-icons";
import CreateModal from "./ui/CreateNoteModal/createNoteModal";
import EditModal from "./ui/EditNoteModal/editNoteModal";
import axios from 'axios';
import {Link} from "react-router-dom";

class App extends Component{
    state = {
        tags: [],
        show: false,
        showEdit: false,
        editNoteId: 0,
        editNoteTitle: '',
        editNoteContent: '',
        selectedTags: [],
        notes: []
    }

    componentDidMount() {
        this.fetchNotes();
        axios('/api/tags', {
            method: 'GET'
        }).then((resp => {
            this.setState({tags: resp.data});
        }));

    }

    fetchNotes = () =>{
        axios('/api/notes', {
            method: 'GET'
        }).then((resp => {
            this.setState({notes: resp.data});
        }));
    }

    handleChangeTitle = (event) =>{
        this.setState({editNoteTitle: event.target.value})
    }

    handleChangeContent = (event) =>{
        this.setState({editNoteContent: event.target.value})
    }

    handleSelectTag = () =>{
        const tag = document.getElementById('tag');
        const tagValue = tag[tag.selectedIndex].value;
        const tagId= parseInt(tag[tag.selectedIndex].id);
        if(this.state.selectedTags.filter(t=>t.id===tagId).length===0){
            const newSelectedTags = this.state.selectedTags.concat({id: tagId, name: tagValue});
            this.setState({selectedTags: newSelectedTags});
        }
    }


    handleDeleteSelectTag = (e)=>{
        const newSelectedTags = this.state.selectedTags.filter(t=>t.id !== parseInt(e.target.id));
        this.setState({selectedTags: newSelectedTags});
    }

    handleDeleteNote = (id) =>{
        //debugger;
        axios('/api/notes/'+ id, {
            method: 'DELETE'
        }).then((() => {
            const newNotes = this.state.notes.filter(n=>n.id!==id);
            this.setState({notes: newNotes});
        }))
    }

    handleClose = () => this.setState({show: false});

    handleCloseEdit = () => this.setState({showEdit: false});


    handleShow = () => this.setState({show: true});

    handleShowEdit = (title, content, id) => {
        this.setState({editNoteTitle: title, editNoteContent: content, editNoteId: id, showEdit: true});
    }

    handleCreate = (name) =>{
        const newTag = {name: name};
        axios('/api/tags', {
            method: 'post',
            data: newTag
        }).then((resp => {
            this.setState({tags: [...this.state.tags, resp.data]});
        }));
    }

    handleEdit = (id, value) =>{
        axios.put("/api/tags/" + id, {name: value}).then(resp => {
            const newTags = this.state.tags.filter(t=>t.id!==id);
            this.setState({tags: [...newTags, resp.data]});
        });
        /* axios('http://localhost:8080/api/tags/'+ id, {
             method: 'PUT',
             body: {name: value},
             auth: {
                 username: 'angela',
                 password: 'angela'
             }
         }).then((() => {

         }));*/
    }
    handleCreateNote = () => {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const note = {title: title, content: content, tags: this.state.selectedTags}
        /* axios.post("http://localhost:8080/api/notes", note, {auth: {
                 username: 'angela',
                 password: 'angela'
             }}).then(resp=>{
             this.setState({notes: [...this.state.notes, resp.data]})

         })*/
        axios('http://localhost:8080/api/notes', {
            method: 'post'
        }).then((resp => {
            this.setState({notes: [...this.state.notes, resp.data]})
        }));
        this.setState({show: false, selectedTags: []})
    }

    filterByTag =(id) =>{
       // debugger;
        let newNotes = [];

        for(let i = 0 ; i<this.state.notes.length;i++){
            for(let j =0 ; j<this.state.notes[i].tags.length;j++){
                if(this.state.notes[i].tags[j].id === id){
                    newNotes.push(this.state.notes[i]);
                    break;
                }
            }
        }

        this.setState({notes: newNotes});
    }

    handleEditNote = () =>{
        const title = document.getElementById('titleEdit').value;
        const content = document.getElementById('contentEdit').value;
       // debugger;
        axios.patch("/api/notes/" + this.state.editNoteId, {title: title, content: content})
            .then(resp => {
            const newNotes = this.state.notes.filter(n=>n.id!==this.state.editNoteId);
            this.setState({notes: [...newNotes, resp.data]});
        });

        this.setState({showEdit: false});

    }

    handleDelete = (id)=>{
        /*axios('http://localhost:8080/api/tags/'+ id, {
            method: 'DELETE',
            auth: {
                username: 'angela',
                password: 'angela'
            }
        }).then((() => {
            const newTags = this.state.tags.filter(t=>t.id!==id);
            this.setState({tags: newTags});
        }));*/

        axios.put("/api/tags/delete/" + id, null).then(resp => {
            const newTags = this.state.tags.filter(t=>t.id!==id);
            this.setState({tags: newTags});
        });

    }

    render() {
        return(
            <div className="app">
                <Header fetchNotes={this.fetchNotes}/>
                <Switch>
                    <Route path="/tags" exact>
                        <Tags tags={this.state.tags} handleCreate={this.handleCreate} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
                    </Route>

                    <Route path="/" exact>
                        <Notes notes={this.state.notes}
                               handleDeleteNote={this.handleDeleteNote}
                               handleShowEdit={this.handleShowEdit} filterByTag={this.filterByTag}/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
                <CreateModal show={this.state.show}
                             tags={this.state.tags}
                             selectedTags={this.state.selectedTags}
                             handleClose={this.handleClose}
                             handleCreateNote={this.handleCreateNote}
                             handleDeleteSelectTag={this.handleDeleteSelectTag}
                             handleSelectTag={this.handleSelectTag}
                />
                <EditModal showEdit={this.state.showEdit}
                           tags={this.state.tags}
                           handleCloseEdit={this.handleCloseEdit} handleChangeTitle={this.handleChangeTitle} handleChangeContent={this.handleChangeContent}
                           handleEditNote={this.handleEditNote}
                           editNoteTitle={this.state.editNoteTitle}
                           editNoteContent={this.state.editNoteContent}/>

                <div onClick={this.handleShow} className="floating-button">
                    <FontAwesomeIcon className= "floating-button:hover" size={"sm"} icon={faPlus}/>
                </div>
            </div>
        );
    }
}

export default App;
