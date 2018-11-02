"""empty message

Revision ID: 0d2042d52a05
Revises: 
Create Date: 2018-11-02 00:47:59.505184

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0d2042d52a05'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('series',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('js_imdb', sa.String(length=200), nullable=True),
    sa.Column('js_omdb', sa.String(length=200), nullable=True),
    sa.Column('created_imdb', sa.DateTime(), nullable=True),
    sa.Column('created_omdb', sa.DateTime(), nullable=True),
    sa.Column('imdb_id', sa.String(length=16), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('js_imdb'),
    sa.UniqueConstraint('js_omdb')
    )
    op.create_index(op.f('ix_series_title'), 'series', ['title'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_series_title'), table_name='series')
    op.drop_table('series')
    # ### end Alembic commands ###