from app import app, db
from app.models  import Series


@app.shell_context_processor
def make_shell_context():
    return {"db": db, "Series": Series}


if __name__ == "__main__":
    app.run(host="0.0.0.0")
